package com.goodfarm.domain.user.dto.response;

import com.goodfarm.domain.user.domain.entity.User;

public record UserResponse(
        String username,
        UserAnalysisResponse analysis,
        boolean isCompleted
) {
    public static UserResponse of(User user) {
        return new UserResponse(user.getUsername(), UserAnalysisResponse.of(user), user.getAnalysis().isCompleted());
    }
}