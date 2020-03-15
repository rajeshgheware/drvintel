package com.drvintel.app.obd;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OBDDataRepository extends JpaRepository<OBDData, OBDDataPK>{

}
