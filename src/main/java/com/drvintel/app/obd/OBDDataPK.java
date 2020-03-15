package com.drvintel.app.obd;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class OBDDataPK implements Serializable{

	@Column
	private String vehicleID;
}
