package com.devsuperior.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleService;
import com.devsuperior.dsmeta.services.SmsService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	// Implement API REST.
	// Provide end-points.

	@Autowired // Inject instance.
	private SaleService service;
	
	@Autowired
	private SmsService smsService;

	/*
	 * Query Params
	 * http://localhost:8080/sales?minDate=2021-11-01&maxDate=2021-12-31
	 */
	// Provide Sales for the Front-end. (end-point)
	@GetMapping // HTTP Verb. Respond via the web using the HTTP protocol.
	public Page<Sale> showSales(
			@RequestParam(value = "minDate", defaultValue = "") String minDate, 
			@RequestParam(value = "maxDate", defaultValue = "") String maxDate, 
			Pageable pageable) {
		return service.findSales(minDate, maxDate, pageable); // Return JSON.
	}
	
	@GetMapping("/{id}/notification") // /sales/notification
	public void notifySms(@PathVariable Long id) {
		smsService.sendSms(id); // Sale id.
	}

}
