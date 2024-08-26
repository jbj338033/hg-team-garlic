package com.goodfarm.global.error;

import lombok.Builder;
import org.springframework.http.ResponseEntity;

@Builder
public record ErrorResponse(int status, String message) {
    public static ErrorResponse of(CustomError code) {
        return ErrorResponse.builder()
                .status(code.getStatus().value())
                .message(code.getMessage())
                .build();
    }

    public ResponseEntity<ErrorResponse> toEntity() {
        return ResponseEntity.status(status).body(this);
    }
}
