package com.parkq.backend.api.ticket

import com.parkq.backend.entity.Ticket
import org.springframework.stereotype.Component

@Component
class TicketMapper {

    fun toDTO(entity: Ticket) =
            TicketDTO(entity.position)
}