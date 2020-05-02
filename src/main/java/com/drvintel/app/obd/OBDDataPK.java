package com.drvintel.app.obd;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;

@Embeddable
@Data
public class OBDDataPK implements Serializable{

	@Column
	private String vehicleID;
	@Column
	private Date received;
	
	
}

