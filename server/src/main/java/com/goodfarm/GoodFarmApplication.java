package com.goodfarm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class GoodFarmApplication {

    public static void main(String[] args) {
        SpringApplication.run(GoodFarmApplication.class, args);
    }

}
