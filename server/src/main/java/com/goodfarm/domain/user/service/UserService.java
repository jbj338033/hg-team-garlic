package com.goodfarm.domain.user.service;

import com.goodfarm.domain.user.dto.response.UserResponse;

public interface UserService {
    UserResponse getMe();

    void setLocation(String location);

    void setHasMoney(boolean hasMoney);

    void setHasLand(boolean hasLand);

    void setHasResidence(boolean hasResidence);

    void setHasExperience(boolean hasExperience);

    void setHasIdea(boolean hasIdea);

    void setHasStudied(boolean hasStudied);
}
