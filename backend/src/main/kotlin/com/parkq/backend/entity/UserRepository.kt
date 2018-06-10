package com.parkq.backend.entity

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, String>, PagingAndSortingRepository<User, String>