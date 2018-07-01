package com.parkq.backend.api.company

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/company")
class CompanyApi {

    @Autowired
    lateinit var service: CompanyService

    @GetMapping
    fun getCompanies(pageable: Pageable) = service.getCompanies(pageable)

    @PostMapping
    fun updateCompany(@RequestBody company : CompanyDTO) = service.updateCompany(company)

    @DeleteMapping
    fun deleteCompany(@RequestBody company : CompanyDTO) = service.deleteCompany(company)
}