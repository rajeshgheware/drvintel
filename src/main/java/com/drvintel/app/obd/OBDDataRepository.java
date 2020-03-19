package com.drvintel.app.obd;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OBDDataRepository extends JpaRepository<OBDData, OBDDataPK>{
  
  @Query(value = "select * from OBD  order by received desc limit 1", nativeQuery = true)
	public OBDData getLastRecord();

}
