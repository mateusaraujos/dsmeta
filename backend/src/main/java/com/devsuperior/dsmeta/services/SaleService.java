package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	// Implement operations using entity's repository.
	
	@Autowired // Inject instance.
	private SaleRepository repository;
	
	// Find all Sales using SaleRepository.
	public List<Sale> findSales() {
		return repository.findAll();
	}

}
