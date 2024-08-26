package com.goodfarm.global.security.holder.impl;

import com.goodfarm.domain.user.domain.entity.User;
import com.goodfarm.domain.user.error.UserError;
import com.goodfarm.domain.user.repository.UserRepository;
import com.goodfarm.global.error.CustomException;
import com.goodfarm.global.security.holder.SecurityHolder;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SecurityHolderImpl implements SecurityHolder {
    private final UserRepository userRepository;

    @Override
    public User getUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        return userRepository.findByUsername(username).orElseThrow(() -> new CustomException(UserError.USER_NOT_FOUND));
    }
}
