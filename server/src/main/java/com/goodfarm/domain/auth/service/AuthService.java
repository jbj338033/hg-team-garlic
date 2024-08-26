package com.goodfarm.domain.auth.service;

import com.goodfarm.domain.auth.dto.request.LoginRequest;
import com.goodfarm.domain.auth.dto.request.ReissueRequest;
import com.goodfarm.domain.auth.dto.request.SignUpRequest;
import com.goodfarm.domain.user.dto.response.UserResponse;
import com.goodfarm.global.security.jwt.dto.Jwt;

public interface AuthService {
    void signup(SignUpRequest request);

    Jwt login(LoginRequest request);

    Jwt reissue(ReissueRequest request);

    UserResponse me();
}
