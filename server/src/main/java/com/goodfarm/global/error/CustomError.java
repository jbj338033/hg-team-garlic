package com.goodfarm.global.error;

import org.springframework.http.HttpStatus;

public interface CustomError {
    HttpStatus getStatus();

    String getCode();

    String getMessage();
}
