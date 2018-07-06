package com.parkq.backend.api.ticket

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/ticket")
class TicketApi {

    @Autowired
    lateinit var service: TicketService

    @GetMapping
    fun getTicket(
            @RequestParam(value = "attraction", defaultValue = "") idAttraction: String,
            @RequestParam(value = "user", defaultValue = "") idUser: String) =
            service.getTicket(idAttraction, idUser)

    @GetMapping("/new")
    fun requestTicket(
            @RequestParam(value = "attraction", defaultValue = "") idAttraction: String,
            @RequestParam(value = "user", defaultValue = "") idUser: String) =
            service.requestTicket(idAttraction, idUser)

}