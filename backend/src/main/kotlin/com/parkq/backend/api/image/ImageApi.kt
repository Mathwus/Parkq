package com.parkq.backend.api.image

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/image")
class ImageApi {

    @Autowired
    lateinit var service: ImageService

    @RequestMapping("/{id}")
    fun getImages(@PathVariable("id") id: String) = service.getImage(id)


    @GetMapping("")
    fun getAttraction(@RequestParam(value = "id", defaultValue = "") idImage: String) =
            service.getImageFinal(idImage)


}