package com.parkq.backend.api.company

data class CompanyDTO(
        val id : String,
        val cnpj : String,
        val name : String,
        val description : String
)