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
	private String Veh_Cal_Eng_Load;
	@Column
	private String Veh_Eng_Coolant_Temp;
	@Column
	private String Veh_Short_Term_Fuel_Trim_Bank_1;
	@Column
	private String Veh_Long_Term_Fuel_Trim_Bank_1;
	@Column
	private String Veh_Short_Term_Fuel_Trim_Bank_2;
	@Column
	private String Veh_Engine_RPM;
	@Column
	private String Veh_Speed;
	@Column
	private String Veh_Intake_Air_Temp;
	@Column
	private String Veh_Throttle_Position;
	@Column
	private String Veh_Fuel_Tank_Level_Input;
	@Column
	private String Veh_Dist_Trav_Since_Cod_Cleared;
	@Column
	private String Veh_Rela_Throt_Pos;
	@Column
	private String Veh_Amb_Air_Temp;
	@Column
	private String Veh_Abs_Throt_Pos_B;
	@Column
	private String Veh_Abs_Throt_Pos_C;
	@Column
	private String Veh_Abs_Throt_Pos_D;
	@Column
	private String Veh_Abs_Throt_Pos_E;
	@Column
	private String Veh_Abs_Throt_Pos_F;
	@Column
	private String Veh_Fuel_Type; 

}
