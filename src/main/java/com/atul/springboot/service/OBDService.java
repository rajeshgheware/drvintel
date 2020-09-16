package com.atul.springboot.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.atul.springboot.entity.OBDData;
import com.atul.springboot.repository.OBDDataRepository;

@Service
@Transactional
public class OBDService {
	
	private OBDDataRepository repo;

	public OBDService(OBDDataRepository repo) {
		super();
		this.repo = repo;
	}
	
	public void uploaddata(ArrayList<OBDData> datalist) {
		for(OBDData data : datalist) 
		{
		repo.save(data);
		}
	}
	
	public ArrayList<OBDData> fetchOBDData(){
		ArrayList<OBDData> datafetched = new ArrayList<>();
		repo.findAll().forEach(datafetched::add);
		return datafetched;
		
	}
	
	
}
