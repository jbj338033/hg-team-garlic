package com.goodfarm.domain.suggest.error;

import com.goodfarm.global.error.CustomError;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum SuggestLocationError implements CustomError {
    LOCATION_NOT_FOUND(HttpStatus.NOT_FOUND, "Location not found");

    private final HttpStatus status;
    private final String message;

    @Override
    public String getCode() {
        return name();
    }
}
