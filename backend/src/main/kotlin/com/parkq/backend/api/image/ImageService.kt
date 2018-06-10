package com.parkq.backend.api.image

import com.parkq.backend.entity.ImageRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.core.io.ClassPathResource
import org.springframework.core.io.InputStreamResource
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import java.io.ByteArrayInputStream
import java.util.*

@Service
class ImageService {

    @Autowired
    lateinit var mapper: ImageMapper

    @Autowired
    lateinit var repository: ImageRepository

    fun getImage(id: String) : Optional<ImageDTO> {
        val image = repository.findById(id)
        if (!image.isPresent) return Optional.empty()
        return Optional.of(mapper.toDTO(image.get()))
    }

    fun getImageFinal(id : String) : ResponseEntity<InputStreamResource> {
        val image = getImage(id)
        val decoder = Base64.getDecoder()
        val decodedBytes = decoder.decode(image.get().data)
        val ipstr = ByteArrayInputStream(decodedBytes)

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_PNG)
                .body(InputStreamResource(ipstr))
    }
}