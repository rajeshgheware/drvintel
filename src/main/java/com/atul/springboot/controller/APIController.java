package com.atul.springboot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.atul.springboot.entity.OBDData;
import com.atul.springboot.service.OBDService;

@CrossOrigin
@Controller
public class APIController {

	private OBDService service2;
	
	public APIController(OBDService service2) {
		super();
		this.service2 = service2;
	}

	@ResponseBody
	@RequestMapping(value="/api/data",method=RequestMethod.GET,produces= {"application/json"})
	public ArrayList<OBDData> returndata(){
		return service2.fetchOBDData();
	}
}

