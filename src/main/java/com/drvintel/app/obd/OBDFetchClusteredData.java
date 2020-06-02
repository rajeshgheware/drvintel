package com.drvintel.app.obd;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OBDFetchClusteredData extends JpaRepository<ClusteredData, Integer> {

	List<ClusteredData> findAll();

}
