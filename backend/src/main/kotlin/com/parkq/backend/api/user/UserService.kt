package com.parkq.backend.api.user

import com.parkq.backend.entity.User
import com.parkq.backend.entity.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class UserService {

    @Autowired
    lateinit var mapper: UserMapper

    @Autowired
    lateinit var repository: UserRepository

    fun getUsers(pageable: Pageable) =
            dto {
                repository.findAll(pageable)
            }

    private fun dto(producer: () -> Page<User>): Page<UserDTO> =
            producer().map { mapper.toDTO(it) }

}