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
class RodaApi {


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

    @GetMapping("/roda")
    fun initialize(pageable: Pageable): Page<CompanyDTO> {
        val companies = repositoryCompany.findAll()

        val betoComp = companies.find { it.email == "beto@beto.com.br" }
        if(betoComp != null){
            val parks = repositoryPark.findAllByCompany(betoComp.id)
            val betoPark = parks.find { it.name == "Beto Carreiro" }
            if (betoPark != null) {

                val image = Image(
                        company = betoComp.id,
                        data = KotlinUtilBase64Image.encoder("./src/main/resources/static/roda.jpeg")
                )
                repositoryImage.save(image)

                print("ATTRACTION")
                val attraction = Attraction(
                        company = betoComp.id,
                        park = betoPark.id,
                        image = image.id,
                        name = "Roda Gigante",
                        description = "a grande roda",
                        estimatedtime = 60,
                        linesize = 60
                )
                repositoryAttraction.save(attraction)

            }
        }


        return companyService.getCompanies(pageable)
    }
}