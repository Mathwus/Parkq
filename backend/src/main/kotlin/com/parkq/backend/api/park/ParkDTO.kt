package com.parkq.backend.api.park

data class ParkDTO(
        val id : String,
        val image : String,
        val company : String,
        val name : String,
        val description : String,
        val location : String
)