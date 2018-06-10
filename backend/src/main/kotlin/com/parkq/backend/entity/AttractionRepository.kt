package com.parkq.backend.entity

import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface AttractionRepository : JpaRepository<Attraction, String>, PagingAndSortingRepository<Attraction, String>{
    fun findAllByPark(idPark: String, pageable: Pageable): Page<Attraction>
}