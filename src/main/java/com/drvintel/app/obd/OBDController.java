package com.drvintel.app.obd;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class OBDController {

	@Autowired
	OBDDataRepository repo;

	@GetMapping(value = "/api/v1/obd")
	public void process(@RequestParam("data") String data) {

		log.info(String.format("Received data: ", data));
		OBDData obd = parse(data);
		repo.saveAndFlush(obd);
	}

	private OBDData parse(String input) {
		String packet[] = input.split(",");
		OBDDataPK pk=new OBDDataPK();
		pk.setVehicleID("Ayush Car");
		pk.setReceived(new Date());
		OBDData data = new OBDData();
		data.setObdDevicePK(pk);
		data.setEngineLoad(packet[0]);
		data.setCoolantTemp(packet[1]);
		data.setSFuelTrimOne(packet[2]);
		data.setLFuelTrimOne(packet[3]);
		data.setSFuelTrimTwo(packet[4]);
		data.setEngineRPM(packet[5]);
		data.setSpeed(packet[6]);
		data.setIntakeAirTemp(packet[7]);
		data.setThrotPosition(packet[8]);
		data.setFuelTLevelInp(packet[9]);
		data.setDTravCodClear(packet[10]);
		data.setRelaThrotPos(packet[11]);
		data.setAmbAirTemp(packet[12]);
		data.setAbsThrotPosB(packet[13]);
		data.setAbsThrotPosC(packet[14]);
		data.setAbsThrotPosD(packet[15]);
		data.setAbsThrotPosE(packet[16]);
		data.setAbsThrotPosF(packet[17]);
		data.setFuelType(packet[18]);

		return data;
	}

}
