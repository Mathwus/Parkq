package com.parkq.backend.api.image

import com.parkq.backend.entity.Image
import org.springframework.stereotype.Component

@Component
class ImageMapper {

    fun toDTO(entity: Image) = ImageDTO(
            id = entity.id,
            data = entity.data
    )
}