package com.parkq.backend.api.ticket

import com.parkq.backend.entity.Ticket
import com.parkq.backend.entity.TicketRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class TicketService {

    @Autowired
    lateinit var mapper: TicketMapper

    @Autowired
    lateinit var repository: TicketRepository

    fun getTickets(pageable: Pageable) =
            dto {
                repository.findAll(pageable)
            }

    private fun dto(producer: () -> Page<Ticket>): Page<TicketDTO> =
            producer().map { mapper.toDTO(it) }

}