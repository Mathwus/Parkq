package com.parkq.backend.api.user

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/user")
class UserApi {

    @Autowired
    lateinit var service: UserService

    @PostMapping
    fun updatePark(@RequestBody user : String) = service.getUser(user)

}