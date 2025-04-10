package com.dheerajbr46.tesla_clone_backend.repository;

import com.dheerajbr46.tesla_clone_backend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
}
