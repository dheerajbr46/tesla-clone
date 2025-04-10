package com.dheerajbr46.tesla_clone_backend.controller;

import com.dheerajbr46.tesla_clone_backend.model.Car;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    @GetMapping
    public List<Car> getAllCars() {
        // Hardcoded data for now
        return Arrays.asList(
                new Car(1L, "Model S", 79990.00, "https://example.com/model-s.jpg"),
                new Car(2L, "Model 3", 39990.00, "https://example.com/model-3.jpg")
        );
    }

}
