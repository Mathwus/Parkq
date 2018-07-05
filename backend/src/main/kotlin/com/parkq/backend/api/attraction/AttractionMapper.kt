package com.parkq.backend.api.attraction

import com.parkq.backend.entity.Attraction
import org.springframework.stereotype.Component

@Component
class AttractionMapper {

    fun toDTO(entity: Attraction) =
            AttractionDTO(
                    id = entity.id,
                    image = entity.image,
                    company = entity.company,
                    park = entity.park,
                    name = entity.name,
                    description = entity.description,
                    linesize = entity.linesize,
                    estimatedtime = entity.estimatedtime,
                    location = entity.location
            )

    fun toEntity(dto: AttractionDTO) =
            if(dto.id.isEmpty())
                Attraction(
                        image = dto.image,
                        company = dto.company,
                        park = dto.park,
                        name = dto.name,
                        description = dto.description,
                        linesize = dto.linesize,
                        estimatedtime = dto.estimatedtime,
                        location = dto.location
                )
            else
                Attraction(
                        id = dto.id,
                        image = dto.image,
                        company = dto.company,
                        park = dto.park,
                        name = dto.name,
                        description = dto.description,
                        linesize = dto.linesize,
                        estimatedtime = dto.estimatedtime,
                        location = dto.location
                )
}