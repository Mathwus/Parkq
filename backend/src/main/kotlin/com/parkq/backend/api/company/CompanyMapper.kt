package com.parkq.backend.api.company

import com.parkq.backend.entity.Company
import org.springframework.stereotype.Component

@Component
class CompanyMapper {

    fun toDTO(entity: Company) =
            CompanyDTO(
                    id = entity.id,
                    name = entity.name,
                    cnpj = entity.cnpj,
                    description = entity.description
            )

    fun toEntity(dto: CompanyDTO) =
            if(dto.id.isEmpty())
                Company(
                        name = dto.name,
                        cnpj = dto.cnpj,
                        description = dto.description
                )
            else
                Company(
                        id = dto.id,
                        name = dto.name,
                        cnpj = dto.cnpj,
                        description = dto.description
                )
}