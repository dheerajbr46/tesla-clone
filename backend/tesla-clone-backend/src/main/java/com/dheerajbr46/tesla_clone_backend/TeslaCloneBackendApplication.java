package com.dheerajbr46.tesla_clone_backend;

import com.dheerajbr46.tesla_clone_backend.model.Car;
import com.dheerajbr46.tesla_clone_backend.repository.CarRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TeslaCloneBackendApplication {

    private final CarRepository carRepository;

    public TeslaCloneBackendApplication(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(TeslaCloneBackendApplication.class, args);
    }

    @PostConstruct
    public void initData() {
        carRepository.save(new Car(1L, "Model S", 79990.00, "https://example.com/model-s.jpg"));
        carRepository.save(new Car(2L, "Model 3", 39990.00, "https://example.com/model-3.jpg"));
    }
}
