package com.parkq.backend.entity

import java.time.LocalDateTime
import java.util.*
import javax.annotation.Generated
import javax.persistence.Basic
import javax.persistence.Entity
import javax.persistence.Id
import javax.validation.constraints.NotBlank

@Entity
data class Ticket (

        @Generated @Id
        val id: String = UUID.randomUUID().toString(),

        @get: Basic
        val position: Int = 1,

        @get: Basic
        val valid: String = "S",

        @get: Basic
        val bookingtime: LocalDateTime = LocalDateTime.now(),

        val entrytime: LocalDateTime? = null,

        @get: Basic
        val company: String = "T",

        @get: Basic
        val park: String = "T",

        @get: Basic
        val attraction: String = "",

        @get: Basic
        val user: String = "",

        @get: Basic
        val quantity: Int = 1,

        @get: Basic
        val remainingtime: String = "T",

        @get: Basic
        val lastentrytime: LocalDateTime = LocalDateTime.now(),

        @get: Basic
        val dtatual: String = "",

        @get: Basic
        val linesize: Int = 1,

        @get: Basic
        val estimatedtime: Int = 1
)