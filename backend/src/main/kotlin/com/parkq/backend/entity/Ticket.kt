package com.parkq.backend.entity

import java.time.LocalDateTime
import java.util.*
import javax.annotation.Generated
import javax.persistence.Entity
import javax.persistence.Id
import javax.validation.constraints.NotBlank

@Entity
data class Ticket (

        @Generated @Id
        val id: String = UUID.randomUUID().toString(),

        @get: NotBlank
        val position: Int = 1,

        @get: NotBlank
        val valid: Char = 'S',

        @get: NotBlank
        val bookingtime: LocalDateTime = LocalDateTime.now(),

        val entrytime: LocalDateTime,

        @get: NotBlank
        val company: String = "",

        @get: NotBlank
        val park: String = "",

        @get: NotBlank
        val attraction: String = "",

        @get: NotBlank
        val user: String = ""

)