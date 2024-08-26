package com.goodfarm.domain.auth.controller;

import com.goodfarm.domain.auth.dto.request.LoginRequest;
import com.goodfarm.domain.auth.dto.request.ReissueRequest;
import com.goodfarm.domain.auth.dto.request.SignUpRequest;
import com.goodfarm.domain.auth.service.AuthService;
import com.goodfarm.global.security.jwt.dto.Jwt;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/signup")
    public void signup(@Valid @RequestBody SignUpRequest request) {
        authService.signup(request);
    }

    @PostMapping("/login")
    public Jwt login(@Valid @RequestBody LoginRequest request) {
        return authService.login(request);
    }

    @PostMapping("/reissue")
    public Jwt reissue(@Valid @RequestBody ReissueRequest request) {
        return authService.reissue(request);
    }
}
