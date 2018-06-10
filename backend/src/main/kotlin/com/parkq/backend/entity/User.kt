package com.parkq.backend.entity

import java.util.*
import javax.annotation.Generated
import javax.persistence.Entity
import javax.persistence.Id
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Entity
data class User (

        @Generated @Id
        val id: String = UUID.randomUUID().toString(),

        @get: NotBlank
        @Size(max=20)
        val phone_number: String = ""
)