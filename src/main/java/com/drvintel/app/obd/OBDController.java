package com.drvintel.app.obd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class OBDController {

	@Autowired
	OBDDataRepository repo;

	@GetMapping(value = "/api/v1/obd")
	public void process(String data) {

		log.info(String.format("Received data: ", data));
		OBDData obd = parse(data);
		repo.saveAndFlush(obd);
	}

	private OBDData parse(String input) {
		Object packet[] = input.split(",");
		OBDData data = new OBDData();
		data.setSpeed((Double) packet[0]);
		return data;
	}

}
