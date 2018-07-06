package com.parkq.backend.api.ticket

data class TicketDTO(
        var id : String,
        var position : Int,
        var remaining_time : String)