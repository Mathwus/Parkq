package com.parkq.backend.api.user

import com.parkq.backend.entity.User
import org.springframework.stereotype.Component

@Component
class UserMapper {

    fun toDTO(entity: User) =
            UserDTO(entity.id, entity.name)
}