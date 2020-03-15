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
	private String shortTermFuelTrimBank1;
	@Column
	private String longTermFuelTrimBank1;
	@Column
	private String shortTermFuelTrimBank2;
	@Column
	private String engineRPM;
	@Column
	private String speed;
	@Column
	private String intakeAirTemp;
	@Column
	private String throttlePosition;
	@Column
	private String fuelTankLevelInput;
	@Column
	private String distTravSinceCodCleared;
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

}
