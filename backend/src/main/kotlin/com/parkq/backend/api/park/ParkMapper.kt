package com.parkq.backend.api.park

import com.parkq.backend.entity.Park
import org.springframework.stereotype.Component

@Component
class ParkMapper {

    fun toDTO(entity: Park) =
            ParkDTO(
                    id = entity.id,
                    image = entity.image,
                    name = entity.name,
                    description = entity.description
            )

    fun toEntity(dto: ParkDTO) =
            if(dto.id.isEmpty())
                Park(
                        image = dto.image,
                        name = dto.name,
                        description = dto.description
                )
            else
                Park(
                        id = dto.id,
                        image = dto.image,
                        name = dto.name,
                        description = dto.description
                )
}