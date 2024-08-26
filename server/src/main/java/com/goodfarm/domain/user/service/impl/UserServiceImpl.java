package com.goodfarm.domain.user.service.impl;

import com.goodfarm.domain.user.domain.entity.User;
import com.goodfarm.domain.user.domain.enums.UserAnalysisBoolean;
import com.goodfarm.domain.user.dto.response.UserResponse;
import com.goodfarm.domain.user.repository.UserRepository;
import com.goodfarm.domain.user.service.UserService;
import com.goodfarm.global.security.holder.SecurityHolder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final SecurityHolder securityHolder;
    private final UserRepository userRepository;

    @Override
    public UserResponse getMe() {
        User user = securityHolder.getUser();

        return UserResponse.of(user);
    }

    @Override
    public void setLocation(String location) {
        User user = securityHolder.getUser();
        user.getAnalysis().setLocation(location);
        userRepository.save(user);
    }

    @Override
    public void setHasMoney(boolean hasMoney) {
        User user = securityHolder.getUser();
        user.getAnalysis().setHasMoney(UserAnalysisBoolean.of(hasMoney));
        userRepository.save(user);
    }

    @Override
    public void setHasLand(boolean hasLand) {
        User user = securityHolder.getUser();
        user.getAnalysis().setHasLand(UserAnalysisBoolean.of(hasLand));
        userRepository.save(user);
    }

    @Override
    public void setHasResidence(boolean hasResidence) {
        User user = securityHolder.getUser();
        user.getAnalysis().setHasResidence(UserAnalysisBoolean.of(hasResidence));
        userRepository.save(user);
    }

    @Override
    public void setHasExperience(boolean hasExperience) {
        User user = securityHolder.getUser();
        user.getAnalysis().setHasExperience(UserAnalysisBoolean.of(hasExperience));
        userRepository.save(user);
    }

    @Override
    public void setHasIdea(boolean hasIdea) {
        User user = securityHolder.getUser();
        user.getAnalysis().setHasIdea(UserAnalysisBoolean.of(hasIdea));
        userRepository.save(user);
    }

    @Override
    public void setHasStudied(boolean hasStudied) {
        User user = securityHolder.getUser();
        user.getAnalysis().setHasStudied(UserAnalysisBoolean.of(hasStudied));
        userRepository.save(user);
    }
}
