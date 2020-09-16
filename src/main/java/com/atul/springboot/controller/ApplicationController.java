package com.atul.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.atul.springboot.entity.OBDData;
import com.atul.springboot.service.OBDService;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

@RestController
public class ApplicationController {
	
	@Autowired
	private OBDService service;
	
	public ApplicationController(OBDService service) {
		super();
		this.service = service;
	}

	@RequestMapping("/upload")
	public String uploaddata() throws IOException {
		String excelfilepath = "D:/Downloads/output.xlsx";
		FileInputStream inputstream = new FileInputStream(new File(excelfilepath));
		ArrayList<OBDData> datalist = new ArrayList<OBDData>();
		Workbook workbook = new XSSFWorkbook(inputstream);
        Sheet worksheet = workbook.getSheetAt(0);
        
        for(int i=worksheet.getFirstRowNum()+1;i<=worksheet.getLastRowNum() ;i++) 
        {
            OBDData obd = new OBDData();
            Row row = worksheet.getRow(i);
            //System.out.println(row.getCell(0).getStringCellValue());
            
            obd.setDate((row.getCell(0).getStringCellValue()));
            obd.setEngine_power(row.getCell(1).getNumericCellValue());
            obd.setEngine_load(row.getCell(2).getNumericCellValue());
            obd.setEngine_rpm((int)row.getCell(3).getNumericCellValue());
            obd.setSpeed((int)row.getCell(4).getNumericCellValue());
            datalist.add(obd);

        }
        
        for(OBDData data : datalist) {
        	System.out.println("ID:"+data.getId()+"Date Time:"+data.getDate()+"Power:"+data.getEngine_power()+"Load:"+data.getEngine_load()+"RPM:"+data.getEngine_rpm()+"Speed:"+data.getSpeed());
        }
        service.uploaddata(datalist);
		return "Data Uploaded";
	}

}
