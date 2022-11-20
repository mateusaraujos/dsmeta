package com.devsuperior.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	// Implement API REST.
	// Provide end-points.
	
	@Autowired // Inject instance.
	private SaleService service;
	
	// Provide Sales for the Front-end. (end-point)
	@GetMapping // HTTP Verb. Respond via the web using the HTTP protocol.
	public List<Sale> findSales() {
		return service.findSales(); // Return JSON.
	}

}
