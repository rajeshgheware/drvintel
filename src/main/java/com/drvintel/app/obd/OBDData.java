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
	@Column
	private String engineLoad;
	@Column
	private String coolantTemp;
	@Column
	private String sFuelTrimOne;
	@Column
	private String lFuelTrimOne;
	@Column
	private String sFuelTrimTwo;
	@Column
	private String engineRPM;
	@Column
	private String speed;
	@Column
	private String intakeAirTemp;
	@Column
	private String throtPosition;
	@Column
	private String fuelTLevelInp;
	@Column
	private String dTravCodClear;
	@Column
	private String relaThrotPos;
	@Column
	private String ambAirTemp;
	@Column
	private String absThrotPosB;
	@Column
	private String absThrotPosC;
	@Column
	private String absThrotPosD;
	@Column
	private String absThrotPosE;
	@Column
	private String absThrotPosF;
	@Column
	private String fuelType;
	@Column String junk;
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
