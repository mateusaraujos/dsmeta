package com.devsuperior.dsmeta.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	// Save, Update, Delete and Search Sales.

	// Performs a Search in the database receiving minimum and maximum date as arguments.
	// JPQL Language.
	@Query("SELECT obj FROM Sale obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.amount DESC")
	Page<Sale> findSalesBetweenMinAndMaxDate(LocalDate min, LocalDate max, Pageable pageable);

}
