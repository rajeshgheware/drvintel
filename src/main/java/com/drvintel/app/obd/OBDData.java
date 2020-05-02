package com.drvintel.app.obd;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="obd")
public class OBDData {
	
	@EmbeddedId
	private OBDDataPK obdDevicePK;
	
	@Column(name = "engineload")
	private String engineLoad;
	
	@Column(name = "coolanttemp")
	private String coolantTemp;
	
	@Column(name = "sfueltrimone")
	private String sFuelTrimOne;
	
	@Column(name = "lfueltrimone")
	private String lFuelTrimOne;
	
	@Column(name = "sfueltrimtwo")
	private String sFuelTrimTwo;
	
	@Column(name = "enginerpm")
	private String engineRPM;
	
	@Column(name = "speed")
	private String speed;
	
	@Column(name = "intakeairtemp")
	private String intakeAirTemp;
	
	@Column(name = "throtposition")
	private String throtPosition;
	
	@Column(name = "fueltlevelinp")
	private String fuelTLevelInp;
	
	@Column(name = "dtravcodclear")
	private String dTravCodClear;
	
	@Column(name = "relathrotpos")
	private String relaThrotPos;
	
	@Column(name = "ambairtemp")
	private String ambAirTemp;
	
	@Column(name = "absthrotposb")
	private String absThrotPosB;
	
	@Column(name = "absthrotposc")
	private String absThrotPosC;
	
	@Column(name = "absthrotposd")
	private String absThrotPosD;
	
	@Column(name = "absthrotpose")
	private String absThrotPosE;
	
	@Column(name = "absthrotposf")
	private String absThrotPosF;
	
	@Column(name = "fueltype")
	private String fuelType;
	
	@Column(name = "junk")
	String junk;
	@Override
	// This portion was added to reply back in Response RIS for the Data=NULL
	public String toString() {
		return  engineLoad + "," + coolantTemp
				+ "," + sFuelTrimOne + "," + lFuelTrimOne + "," + sFuelTrimTwo
				+ "," + engineRPM + "," + speed + "," + intakeAirTemp
				+ "," + throtPosition + "," + fuelTLevelInp + ","
				+ dTravCodClear + "," + relaThrotPos + "," + ambAirTemp + ","
				+ absThrotPosB + "," + absThrotPosC + "," + absThrotPosD + ","
				+ absThrotPosE + "," + absThrotPosF + "," + fuelType+ ","+ junk ;
	}
	
	
	

}
