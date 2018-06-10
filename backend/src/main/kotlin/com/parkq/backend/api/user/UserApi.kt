package com.parkq.backend.api.user

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/user")
class UserApi {

    @Autowired
    lateinit var service: UserService

    @GetMapping("")
    fun getUsers(pageable: Pageable) = service.getUsers(pageable)

}