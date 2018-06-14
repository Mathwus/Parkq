package com.parkq.backend.entity

import org.springframework.data.domain.Page
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import org.springframework.data.domain.Pageable

@Repository
interface ParkRepository : JpaRepository<Park, String>, PagingAndSortingRepository<Park, String>{
    fun findAllByCompany(company: String, pageable: Pageable): Page<Park>

    fun findAllByCompany(company: String): List<Park>
}