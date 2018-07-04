package com.parkq.backend.api.ticket

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

    fun getInfoTickets(pageable: Pageable):Int {
        val position = repository.findPositionByUser("", pageable).first().position;
        val quantity = repository.findQuantityByPosition(position, pageable).first().quantity;
        val lastEntryTime = repository.findLastEntryTime("", pageable).first().lastentrytime;
        val infoAttraction = repository.findAllByAttraction("", pageable).first();
        val diffHour = (lastEntryTime.hour-LocalDateTime.now().hour)*60;
        val diffMinute = (lastEntryTime.minute-LocalDateTime.now().minute);
        val diffSecond = (lastEntryTime.second-LocalDateTime.now().second)/60;

        val result = (diffHour + diffMinute + diffSecond) + ((quantity/infoAttraction.linesize)*infoAttraction.estimatedtime);
        return result;
    }

    fun getTickets(pageable: Pageable) =
            dto {

                repository.findAll(pageable)
            }

    private fun dto(producer: () -> Page<Ticket>): Page<TicketDTO> =
            producer().map { mapper.toDTO(it) }

}