package com.alterdune.alterdune.springboost;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;

@SpringBootApplication(exclude = ErrorMvcAutoConfiguration.class)
public class AlterduneSpringboostApplication {
	public static void main(String[] args) {
		SpringApplication.run(AlterduneSpringboostApplication.class, args);
	}
}
