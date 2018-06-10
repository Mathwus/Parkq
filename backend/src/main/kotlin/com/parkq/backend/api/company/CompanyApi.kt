package com.parkq.backend.api.company

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/company")
class CompanyApi {

    @Autowired
    lateinit var service: CompanyService

    @GetMapping("")
    fun getCompanies(pageable: Pageable) = service.getCompanies(pageable)

}