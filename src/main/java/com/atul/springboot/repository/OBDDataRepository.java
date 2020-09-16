package com.atul.springboot.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.atul.springboot.entity.OBDData;

@Repository
public interface OBDDataRepository extends CrudRepository<OBDData, Integer> {

}
