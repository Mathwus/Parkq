package com.parkq.backend.api.attraction

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/attraction")
class AttractionApi {

    @Autowired
    lateinit var service: AttractionService

    @GetMapping
    fun getAttractions(@RequestParam(value = "park", defaultValue = "") idPark: String,
                       pageable: Pageable) =
            service.getAttractionsByPark(idPark, pageable)

    @PostMapping
    fun updateAttraction(@RequestBody attraction : AttractionDTO) = service.updateAttraction(attraction)

    @DeleteMapping
    fun deleteAttraction(@RequestBody attraction : AttractionDTO) = service.deleteAttraction(attraction)

}