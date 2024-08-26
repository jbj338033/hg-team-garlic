package com.goodfarm.global.security.jwt.error;

import com.goodfarm.global.error.CustomError;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum JwtError implements CustomError {
    INVALID_TOKEN(HttpStatus.UNAUTHORIZED, "Invalid Token"),
    EXPIRED_TOKEN(HttpStatus.UNAUTHORIZED, "Expired Token"),
    INVALID_TOKEN_TYPE(HttpStatus.UNAUTHORIZED, "Invalid Token Type"),
    MALFORMED_TOKEN(HttpStatus.UNAUTHORIZED, "Malformed Token"),
    UNSUPPORTED_TOKEN(HttpStatus.UNAUTHORIZED, "Unsupported Token"),
    ;


    private final HttpStatus status;
    private final String message;

    @Override
    public String getCode() {
        return name();
    }
}
