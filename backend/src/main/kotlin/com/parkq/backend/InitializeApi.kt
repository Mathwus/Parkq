package com.parkq.backend

import com.parkq.backend.api.company.CompanyDTO
import com.parkq.backend.api.company.CompanyService
import com.parkq.backend.entity.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@Service
@RestController
class InitializeApi {

    @Autowired
    lateinit var companyService: CompanyService

    @Autowired
    lateinit var repositoryImage: ImageRepository

    @Autowired
    lateinit var repositoryCompany: CompanyRepository

    @Autowired
    lateinit var repositoryPark: ParkRepository

    @Autowired
    lateinit var repositoryAttraction: AttractionRepository

    @GetMapping("/initialize")
    fun initialize(pageable: Pageable): Page<CompanyDTO> {

        if(0 == repositoryCompany.count().toInt()){
            print("Beto Carreiro COMPANY")
            val companyBeto = Company(
                    name = "Beto Carreiro",
                    cnpj = "1006795914",
                    email = "beto@beto.com.br",
                    phone_number = "(47) 99222-3222",
                    description = "Fundado em 2002"
            )
            repositoryCompany.save(companyBeto)

            val imageBeto = Image(
                    id_company = companyBeto.id,
                    data = KotlinUtilBase64Image.encoder("./src/main/resources/static/beto-carrero.png")
            )
            repositoryImage.save(imageBeto)

            print("Beto Carreiro PARK")
            val parkBeto = Park(
                    name = "Beto Carreiro",
                    id_company = companyBeto.id,
                    id_image = imageBeto.id,
                    description = "Fundado em 2002"
            )
            repositoryPark.save(parkBeto)

            val imageNavio = Image(
                    id_company = companyBeto.id,
                    data = KotlinUtilBase64Image.encoder("./src/main/resources/static/navio-pirata.jpg")
            )
            repositoryImage.save(imageNavio)

            print("Navio ATTRACTION")
            val attractionNavio = Attraction(
                    company = companyBeto.id,
                    park = parkBeto.id,
                    image = imageNavio.id,
                    name = "Navio Pirata",
                    description = "O navio temido",
                    estimated_time = 60,
                    line_size = 60
            )
            repositoryAttraction.save(attractionNavio)

            val imageAguas = Image(
                    id_company = companyBeto.id,
                    data = KotlinUtilBase64Image.encoder("./src/main/resources/static/parque-aguas.jpg")
            )
            repositoryImage.save(imageAguas)

            print("Aguas ATTRACTION")
            val attractionAguas = Attraction(
                    company = companyBeto.id,
                    park = parkBeto.id,
                    image = imageAguas.id,
                    name = "Parque das Aguas",
                    description = "Diversão e Aguas juntas",
                    estimated_time = 80,
                    line_size = 6
            )
            repositoryAttraction.save(attractionAguas)

            print("Disney COMPANY")
            val companyDisney = Company(
                    name = "InitializeApi Carreiro",
                    cnpj = "1006795914",
                    email = "diseny@disney.com",
                    phone_number = "(47) 99222-3222",
                    description = "Disney Cara!"
            )
            repositoryCompany.save(companyDisney)

            val imageDisney = Image(
                    id_company = companyDisney.id,
                    data = KotlinUtilBase64Image.encoder("./src/main/resources/static/disney.jpg")
            )
            repositoryImage.save(imageDisney)

            print("Disney PAK")
            val parkDisney = Park(
                    name = "Disney",
                    id_company = companyDisney.id,
                    id_image = imageDisney.id,
                    description = "OLOKO DISNEY!!!"
            )
            repositoryPark.save(parkDisney)

        }

        return companyService.getCompanies(pageable)
    }

}