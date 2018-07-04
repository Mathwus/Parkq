package com.parkq.backend.api.attraction

import com.parkq.backend.entity.Attraction
import org.springframework.stereotype.Component

@Component
class AttractionMapper {

    fun toDTO(entity: Attraction) =
            AttractionDTO(
                    id = entity.id,
                    image = entity.image,
                    name = entity.name,
                    description = entity.description
            )

    fun toEntity(dto: AttractionDTO) =
            if(dto.id.isEmpty())
                Attraction(
                        image = dto.image,
                        name = dto.name,
                        description = dto.description
                )
            else
                Attraction(
                        id = dto.id,
                        image = dto.image,
                        name = dto.name,
                        description = dto.description
                )
}