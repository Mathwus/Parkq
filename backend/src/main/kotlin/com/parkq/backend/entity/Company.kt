package com.parkq.backend.entity

import javax.persistence.*
import javax.validation.constraints.*
import java.util.*
import javax.annotation.Generated

@Entity
data class Company (

    @Generated @Id
    val id: String = UUID.randomUUID().toString(),

    @get: NotBlank
    @Size(max=18)
    val cnpj: String = "",

    @get: NotBlank
    @Size(max=60)
    val name: String = "",

    @get: NotBlank
    @Size(max=255)
    val description: String = "",

    @get: Basic
    @Size(max=15)
    val phonenumber: String = "",

    @get: Email
    @Size(max=60)
    val email: String = ""
)