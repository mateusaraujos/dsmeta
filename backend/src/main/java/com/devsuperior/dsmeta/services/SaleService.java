package com.devsuperior.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	// Implement operations using entity's repository.

	@Autowired // Inject instance.
	private SaleRepository repository;

	// Find Sales between minimum and maximum using SaleRepository.
	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
		
		// In case of null Strings.
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

		// Transform String in Date.
		// If minDate doesn't exist, transform to today of a year ago.
		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		// If maxDate doesn't exist, transform to today date.
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);

		return repository.findSalesBetweenMinAndMaxDate(min, max, pageable);
	}

}
