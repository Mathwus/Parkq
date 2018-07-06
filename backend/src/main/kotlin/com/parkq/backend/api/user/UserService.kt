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

    private fun dto(producer: () -> User): UserDTO =
            mapper.toDTO(producer())

    fun getUser(name: String) =
            dto{
                if(repository.existsByName(name))
                    repository.findByName(name)
                else{
                    val user = User(name = name)
                    repository.save(user)
                    user
                }
            }
}