package com.parkq.backend.api.attraction

data class AttractionDTO(
        val id : String,
        val image : String,
        val company : String,
        val park: String,
        val name : String,
        val description : String,
        val linesize : Int,
        val estimatedtime : Int,
        val location : String
)