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
	private Double speed; 

}
