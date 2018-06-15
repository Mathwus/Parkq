package com.parkq.backend.api.park

import com.parkq.backend.entity.Park
import com.parkq.backend.entity.ParkRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class ParkService {

    @Autowired
    lateinit var mapper: ParkMapper

    @Autowired
    lateinit var repository: ParkRepository

    fun getPakrsOfCompany(idCompany: String, pageable: Pageable) =
            dto {
                if(idCompany.isEmpty()) repository.findAll(pageable)
                else repository.findAllByCompany(idCompany, pageable)
            }

    private fun dto(producer: () -> Page<Park>): Page<ParkDTO> =
            producer().map { mapper.toDTO(it) }

}