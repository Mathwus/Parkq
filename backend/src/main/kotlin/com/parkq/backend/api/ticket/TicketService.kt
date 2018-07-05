package com.parkq.backend.api.ticket

import com.parkq.backend.entity.AttractionRepository
import com.parkq.backend.entity.Ticket
import com.parkq.backend.entity.TicketRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class TicketService {

    @Autowired
    lateinit var mapper: TicketMapper

    @Autowired
    lateinit var repository: TicketRepository

    @Autowired
    lateinit var repositoryAttraction: AttractionRepository

    fun getInfoTickets(idAttration : String, idUser : String):Int {
        val optionalPosition = repository.findOptionalByAttractionAndUserAndEntrytimeIsNullOrderByPositionDesc(idAttration, idUser)
        var position = Int.MAX_VALUE
        if(optionalPosition.isPresent)
            position = optionalPosition.get().position
        val quantity = repository.countByAttractionAndPositionLessThan(idAttration, position)
        val optionalLastEntryTime = repository.findOptionalByAttractionOrderByEntrytimeDesc(idAttration)
        var lastEntryTime = LocalDateTime.MIN
        if(optionalLastEntryTime.isPresent)
            lastEntryTime = optionalLastEntryTime.get().lastentrytime
        val infoAttraction = repositoryAttraction.findById(idAttration)
        val now = LocalDateTime.now()
        val diffHour = (lastEntryTime.hour-now.hour)*60
        val diffMinute = (lastEntryTime.minute-now.minute)
        val diffSecond = (lastEntryTime.second-now.second)/60

        val result = (diffHour + diffMinute + diffSecond) + ((quantity/infoAttraction.get().linesize)*infoAttraction.get().estimatedtime)
        return result
    }

    fun getTickets(pageable: Pageable) =
            dto {

                repository.findAll(pageable)
            }

    private fun dto(producer: () -> Page<Ticket>): Page<TicketDTO> =
            producer().map { mapper.toDTO(it) }

}