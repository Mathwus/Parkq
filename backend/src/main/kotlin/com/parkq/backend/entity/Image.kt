package com.parkq.backend.entity

import java.util.*
import javax.annotation.Generated
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Lob
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Entity
data class Image (

        @Generated @Id
        val id: String = UUID.randomUUID().toString(),

        @get: NotBlank
        @Lob
        val data: String = "",

        @get: NotBlank
        val id_company: String = ""

)