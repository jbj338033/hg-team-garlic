package com.goodfarm.domain.auth.service.impl;

import com.goodfarm.domain.auth.dto.request.LoginRequest;
import com.goodfarm.domain.auth.dto.request.SignUpRequest;
import com.goodfarm.domain.auth.service.AuthService;
import com.goodfarm.domain.user.domain.entity.User;
import com.goodfarm.domain.user.domain.entity.UserAnalysis;
import com.goodfarm.domain.user.domain.enums.UserRole;
import com.goodfarm.domain.user.error.UserError;
import com.goodfarm.domain.user.repository.UserRepository;
import com.goodfarm.global.error.CustomException;
import com.goodfarm.global.security.jwt.dto.Jwt;
import com.goodfarm.global.security.jwt.provider.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;

    @Transactional
    @Override
    public void signup(SignUpRequest request) {
        String username = request.username();
        String password = request.password();

        if (userRepository.existsByUsername(username)) throw new CustomException(UserError.USER_ALREADY_EXISTS);

        User user = User.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .role(UserRole.USER)
                .analysis(UserAnalysis.builder().build())
                .build();

        userRepository.save(user);
    }

    @Transactional(readOnly = true)
    @Override
    public Jwt login(LoginRequest request) {
        String username = request.username();
        String password = request.password();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(UserError.USER_NOT_FOUND));

        if (!passwordEncoder.matches(password, user.getPassword()))
            throw new CustomException(UserError.PASSWORD_NOT_MATCH);

        Jwt token = jwtProvider.generateToken(user);

        return token;
    }
}
