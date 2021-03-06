package com.parkq.backend.entity

import java.util.*
import javax.annotation.Generated
import javax.persistence.Basic
import javax.persistence.Entity
import javax.persistence.Id
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Entity
data class Attraction (

        @Generated @Id
        val id: String = UUID.randomUUID().toString(),

        @get: Basic
        @Size(max=20)
        val name: String = "",

        @get: Basic
        @Size(max=255)
        val description: String = "",

        @get: Basic
        val linesize: Int = 1,

        @get: Basic
        val estimatedtime: Int = 1,

        @get: NotBlank
        val company: String = "",

        @get: NotBlank
        val park: String = "",

        @get : Basic
        val image: String = "",

        val location: String = ""

)