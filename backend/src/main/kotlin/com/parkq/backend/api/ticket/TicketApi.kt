package com.parkq.backend.api.ticket

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/ticket")
class TicketApi {

    @Autowired
    lateinit var service: TicketService

    @GetMapping("")
    fun getTickets(pageable: Pageable) = service.getTickets(pageable)

}