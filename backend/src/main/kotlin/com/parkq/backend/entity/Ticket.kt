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
        val is_valid: Char = 'S',

        @get: NotBlank
        val booking_time: LocalDateTime = LocalDateTime.now(),

        val entry_time: LocalDateTime,

        @get: NotBlank
        val id_company: String = "",

        @get: NotBlank
        val id_park: String = "",

        @get: NotBlank
        val id_attraction: String = "",

        @get: NotBlank
        val id_user: String = ""

)