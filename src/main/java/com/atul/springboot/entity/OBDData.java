package com.atul.springboot.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Data")
public class OBDData {
	@Id
	@GeneratedValue
	private int id;
	private String date;
	private double engine_power;
	private double engine_load;
	private int engine_rpm;
	private int speed;
	
	public OBDData(String date, double engine_power, double engine_load, int engine_rpm, int speed) {
		super();
		this.date = date;
		this.engine_power = engine_power;
		this.engine_load = engine_load;
		this.engine_rpm = engine_rpm;
		this.speed = speed;
	}
	
	public OBDData() {
		
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	public double getEngine_power() {
		return engine_power;
	}
	public void setEngine_power(double engine_power) {
		this.engine_power = engine_power;
	}
	public double getEngine_load() {
		return engine_load;
	}
	public void setEngine_load(double engine_load) {
		this.engine_load = engine_load;
	}
	public int getEngine_rpm() {
		return engine_rpm;
	}
	public void setEngine_rpm(int engine_rpm) {
		this.engine_rpm = engine_rpm;
	}
	public int getSpeed() {
		return speed;
	}
	public void setSpeed(int speed) {
		this.speed = speed;
	}

	@Override
	public String toString() {
		return "OBDData [id=" + id + ", date=" + date + ", engine_power=" + engine_power + ", engine_load="
				+ engine_load + ", engine_rpm=" + engine_rpm + ", speed=" + speed + "]";
	}
	
}
