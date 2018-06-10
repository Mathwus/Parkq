package com.parkq.backend.api.park

import com.parkq.backend.entity.Park
import org.springframework.stereotype.Component

@Component
class ParkMapper {

    fun toDTO(entity: Park) =
            ParkDTO(
                    id = entity.id,
                    id_image = entity.id_image,
                    name = entity.name,
                    description = entity.description
            )
}