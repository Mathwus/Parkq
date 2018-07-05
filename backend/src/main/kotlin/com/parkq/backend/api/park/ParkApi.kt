package com.parkq.backend.api.park

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/park")
class ParkApi {

    @Autowired
    lateinit var service: ParkService

    @GetMapping
    fun getParks(@RequestParam(value = "company", defaultValue = "") idCompany: String,
                pageable: Pageable) =
        service.getPakrsOfCompany(idCompany, pageable)
    @PostMapping
    fun updatePark(@RequestBody park : ParkDTO) = service.updatePark(park)

    @DeleteMapping
    fun deletePark(@RequestBody park : ParkDTO) = service.deletePark(park)
}