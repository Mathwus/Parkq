package com.parkq.backend.entity

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.Query

@Repository
interface TicketRepository : JpaRepository<Ticket, String>, PagingAndSortingRepository<Ticket, String>{
    @Query("select max(position) userposition                                            " +
            "from Ticket y                                                                 " +
            "where x.attraction = y.attraction                                             " +
            "and y.entrytime is null                                                       " +
            "and y.user = ?idUser                                  ")
    fun findPositionByUser(idUser: String, pageable: Pageable): Page<Ticket>

    @Query("select count(*) quantity     " +
                "from Ticket x                 " +
                "where x.attraction = a.id     " +
                "and x.position < ?position    ")
    fun findQuantityByPosition(position: Int, pageable: Pageable): Page<Ticket>

    @Query (" select max(entrytime) lastentrytime " +
            " from Ticket x " +
            " where x.attraction = ?idAttraction ")
    fun findLastEntryTime(idAttraction: String, pageable: Pageable): Page<Ticket>

    @Query("select now() dtatual," +
            "		a.linesize,                                                                       " +
            "		a.estimatedtime                                                                   " +
            "from 	attraction a                                                                      " +
            "where 	a.id = ?idAttraction                                                              ")
    fun findAllByAttraction(idAttraction: String, pageable: Pageable): Page<Ticket>
}