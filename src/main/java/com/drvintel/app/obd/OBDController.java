package com.drvintel.app.obd;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<String> process(@RequestParam("data") String data) {
		String strTemp="";
		log.info(String.format("Received data: %s", data));
		//repo.saveAndFlush(obd);
		strTemp = String.format("%04d", data.length());
		
		
		if(data == "") {
			
			String LastRecord= repo.getLastRecord().toString();
			String data2 = "RIS="+LastRecord+"12345";	
			return new ResponseEntity<String>(data2, HttpStatus.OK);
		}
		else
		{	
			OBDData obd = parse(data);
			long time = obd.getObdDevicePK().getReceived().getTime();
			String data1 = "RIS=*"+time+"<'."+data+".'>";
			repo.save(obd);
			if(data.length()<25) 
			{			

				
				String data2 = "RIS="+time+"ERROR"+ strTemp +"12345";	
				return new ResponseEntity<String>(data2, HttpStatus.OK);
			}
			else
			{
				return new ResponseEntity<String>(data1, HttpStatus.OK);
			}
		}	
	}

	private OBDData parse(String input) {
		int nCommaCount=0;
		int length = input.length();
		log.info(String.format("Received Length: %d", length));
		log.info(String.format("Received input: %s", input));
		//  "Received Data %s",input.toString()
		System.out.println(input.toString());
		
		for(int i = 0; i < input.length(); i++) 
        { 
			
            char ch = input.charAt(i); 
            if (ch == ',') 
                nCommaCount++;
        }
		log.info(String.format("Comma Count: %s", nCommaCount));
		
		
		String packet[] = input.split(",");
		OBDDataPK pk=new OBDDataPK();
		pk.setVehicleID("Ayush1 Car");
		pk.setReceived(new Date());
		OBDData data = new OBDData();
		data.setObdDevicePK(pk);
		
		if(nCommaCount < 5)
		{
			data.junk=input;
			
		}
		else
		{
			int i = 0;
			if(++i <= packet.length)data.setEngineLoad(packet[0]);
			if(++i <= packet.length)data.setCoolantTemp(packet[1]);
			if(++i <= packet.length)data.setSFuelTrimOne(packet[2]);
			if(++i <= packet.length)data.setLFuelTrimOne(packet[3]);
			if(++i <= packet.length)data.setSFuelTrimTwo(packet[4]);
			if(++i <= packet.length)data.setEngineRPM(packet[5]);
			if(++i <= packet.length)data.setSpeed(packet[6]);
			if(++i <= packet.length)data.setIntakeAirTemp(packet[7]);
			if(++i <= packet.length)data.setThrotPosition(packet[8]);
			if(++i <= packet.length)data.setFuelTLevelInp(packet[9]);
			if(++i <= packet.length)data.setDTravCodClear(packet[10]);
			if(++i <= packet.length)data.setRelaThrotPos(packet[11]);
			if(++i <= packet.length)data.setAmbAirTemp(packet[12]);
			if(++i <= packet.length)data.setAbsThrotPosB(packet[13]);
			if(++i <= packet.length)data.setAbsThrotPosC(packet[14]);
			if(++i <= packet.length)data.setAbsThrotPosD(packet[15]);
			if(++i <= packet.length)data.setAbsThrotPosE(packet[16]);
			if(++i <= packet.length)data.setAbsThrotPosF(packet[17]);
			if(++i <= packet.length)data.setFuelType(packet[18]);

			System.out.println(data.toString());

		}
		
				return data;
	}

}
