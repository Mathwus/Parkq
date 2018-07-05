package com.parkq.backend.entity

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface TicketRepository : JpaRepository<Ticket, String>, PagingAndSortingRepository<Ticket, String>{

    fun findOptionalByAttractionAndUserAndEntrytimeIsNullOrderByPositionDesc(idAttraction: String, idUser: String): Optional<Ticket>

    fun countByAttractionAndPositionLessThan(idAttraction : String, position : Int): Int

    fun findOptionalByAttractionOrderByEntrytimeDesc(idAttraction: String): Optional<Ticket>

}