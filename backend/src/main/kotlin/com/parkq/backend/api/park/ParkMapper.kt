package com.parkq.backend.api.park

import com.parkq.backend.entity.Park
import org.springframework.stereotype.Component

@Component
class ParkMapper {

    fun toDTO(entity: Park) =
            ParkDTO(
                    id = entity.id,
                    image = entity.image,
                    company = entity.company,
                    name = entity.name,
                    description = entity.description,
                    location = entity.location
            )

    fun toEntity(dto: ParkDTO) =
            if(dto.id.isEmpty())
                Park(
                        image = dto.image,
                        company = dto.company,
                        name = dto.name,
                        description = dto.description,
                        location = dto.location
                )
            else
                Park(
                        id = dto.id,
                        image = dto.image,
                        company = dto.company,
                        name = dto.name,
                        description = dto.description,
                        location = dto.location
                )
}