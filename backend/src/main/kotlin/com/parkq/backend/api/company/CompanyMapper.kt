package com.parkq.backend.api.company

import com.parkq.backend.entity.Company
import org.springframework.stereotype.Component

@Component
class CompanyMapper {

    fun toDTO(entity: Company) =
            CompanyDTO(
                    id = entity.id,
                    name = entity.name,
                    description = entity.description
            )
}