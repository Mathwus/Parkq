package com.parkq.backend.api.company

import com.parkq.backend.entity.Company
import com.parkq.backend.entity.CompanyRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class CompanyService {

    @Autowired
    lateinit var mapper: CompanyMapper

    @Autowired
    lateinit var repository: CompanyRepository

    fun getCompanies(pageable: Pageable) =
            dto {
                repository.findAll(pageable)
            }

    private fun dto(producer: () -> Page<Company>): Page<CompanyDTO> =
            producer().map { mapper.toDTO(it) }

}