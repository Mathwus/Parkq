package com.parkq.backend.api.attraction

import com.parkq.backend.entity.Attraction
import org.springframework.stereotype.Component

@Component
class AttractionMapper {

    fun toDTO(entity: Attraction) =
            AttractionDTO(
                    id = entity.id,
                    id_image = entity.image,
                    name = entity.name,
                    description = entity.description
            )
}