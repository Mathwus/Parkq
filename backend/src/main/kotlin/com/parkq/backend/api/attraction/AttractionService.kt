package com.parkq.backend.api.attraction

import com.parkq.backend.entity.Attraction
import com.parkq.backend.entity.AttractionRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class AttractionService {

    @Autowired
    lateinit var mapper: AttractionMapper

    @Autowired
    lateinit var repository: AttractionRepository

    fun getAttractionsByPark(idPark : String, pageable: Pageable) =
            dto {
                if(idPark.isEmpty()) repository.findAll(pageable)
                else repository.findAllByPark(idPark, pageable)
            }

    private fun dto(producer: () -> Page<Attraction>): Page<AttractionDTO> =
            producer().map { mapper.toDTO(it) }

    fun updateAttraction(company: AttractionDTO) {
        repository.save(mapper.toEntity(company))
    }

    fun deleteAttraction(company: AttractionDTO) {
        repository.delete(mapper.toEntity(company))
    }

    fun getTicketsInQueue(idAttraction: String): Long {
        return repository.count()
    }

}