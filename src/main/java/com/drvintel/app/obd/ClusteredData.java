package com.drvintel.app.obd;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import javax.persistence.Id;

import lombok.Data;




@Data
@Entity
@Table(name="DataLake1")
public class ClusteredData {
	
	@Id
	@Column(name = "index1")
	private Integer INDEX1;
	
	@Column(name = "ENGINE_POWER")
	private String ENGINE_POWER;
	
	@Column(name = "ENGINE_COOLANT_TEMP")
	private String ENGINE_COOLANT_TEMP;
	
	@Column(name = "ENGINE_LOAD")
	private String ENGINE_LOAD;
	
	@Column(name = "ENGINE_RPM")
	private String ENGINE_RPM;
	
	@Column(name = "speed")
	private String SPEED;
	
	@Column(name = "THROTTLE_POS")
	private String THROTTLE_POS;
	
	@Column(name = "cluster")
	private Integer CLUSTER;

	public Integer getINDEX1() {
		return INDEX1;
	}

	public void setINDEX1(Integer INDEX1) {
		this.INDEX1 = INDEX1;
	}
	
	public String getENGINE_POWER() {
		return ENGINE_POWER;
	}

	public void setENGINE_POWER(String ENGINE_POWER) {
		this.ENGINE_POWER = ENGINE_POWER;
	}
	
	public String getENGINE_COOLANT_TEMP() {
		return ENGINE_COOLANT_TEMP;
	}

	public void setENGINE_COOLANT_TEMP(String ENGINE_COOLANT_TEMP) {
		this.ENGINE_COOLANT_TEMP = ENGINE_COOLANT_TEMP;
	}
	
	public String getENGINE_LOAD() {
		return ENGINE_LOAD;
	}

	public void setENGINE_LOAD(String ENGINE_LOAD) {
		this.ENGINE_LOAD = ENGINE_LOAD;
	}
	
	public String getENGINE_RPM() {
		return ENGINE_RPM;
	}

	public void setENGINE_RPM(String ENGINE_RPM) {
		this.ENGINE_RPM = ENGINE_RPM;
	}
	
	public String getSPEED() {
		return SPEED;
	}

	public void setSPEED(String SPEED) {
		this.SPEED = SPEED;
	}
	
	public String getTHROTTLE_POS() {
		return THROTTLE_POS;
	}

	public void setTHROTTLE_POS(String THROTTLE_POS) {
		this.THROTTLE_POS = THROTTLE_POS;
	}
	
	public Integer getCLUSTER() {
		return CLUSTER;
	}

	public void setCLUSTER(Integer CLUSTER) {
		this.CLUSTER = CLUSTER;
	}
	
	

}
