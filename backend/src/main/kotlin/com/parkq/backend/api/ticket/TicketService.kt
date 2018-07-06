package com.parkq.backend.api.ticket

import com.parkq.backend.entity.AttractionRepository
import com.parkq.backend.entity.Ticket
import com.parkq.backend.entity.TicketRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.util.*

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
        val optionalLastEntryTime = repository.findAllByAttractionOrderByEntrytimeDesc(idAttration).firstOrNull()
        var lastEntryTime = LocalDateTime.MIN
        if(optionalLastEntryTime != null)
            lastEntryTime = optionalLastEntryTime.lastentrytime
        val infoAttraction = repositoryAttraction.findById(idAttration)
        val now = LocalDateTime.now()
        val diffHour = (lastEntryTime.hour-now.hour)*60
        val diffMinute = (lastEntryTime.minute-now.minute)
        val diffSecond = (lastEntryTime.second-now.second)/60

        val result = (diffHour + diffMinute + diffSecond) + ((quantity/infoAttraction.get().linesize)*infoAttraction.get().estimatedtime)
        return result
    }

    private fun dto(producer: () -> Ticket): TicketDTO =
            mapper.toDTO(producer())

    fun getTicket(idAttraction: String, idUser: String): TicketDTO?{
        val ticket = repository.findOptionalByAttractionAndUserAndEntrytimeIsNullOrderByPositionDesc(idAttraction, idUser);
        if(ticket.isPresent)
            return dto { ticket.get() }
        return null
    }

    fun requestTicket(idAttraction: String, idUser: String): TicketDTO {
        var position = 1
        val max = repository.findAllByAttractionOrderByEntrytimeDesc(idAttraction).firstOrNull()
        if(max != null) position = max.position + 1

        val ticket =Ticket(
                attraction = idAttraction,
                position = position,
                user = idUser,
                valid = "S",
                remainingtime = "13",
                entrytime = null)
        repository.save(ticket)
        return mapper.toDTO(ticket)
    }
}