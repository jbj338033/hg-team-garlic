package com.goodfarm.domain.user.dto.response;

import com.goodfarm.domain.user.domain.entity.User;
import com.goodfarm.domain.user.domain.enums.UserAnalysisBoolean;

public record UserAnalysisResponse(
        Object location,
        Object hasMoney,
        Object hasLand,
        Object hasResidence,
        Object hasExperience,
        Object hasIdea,
        Object hasStudied
) {
    public static UserAnalysisResponse of(User user) {
        return new UserAnalysisResponse(
                user.getAnalysis().getLocation().isEmpty() ? null : user.getAnalysis().getLocation(),
                user.getAnalysis().getHasMoney() != UserAnalysisBoolean.NULL ? user.getAnalysis().getHasMoney().value() : null,
                user.getAnalysis().getHasLand() != UserAnalysisBoolean.NULL ? user.getAnalysis().getHasLand().value() : null,
                user.getAnalysis().getHasResidence() != UserAnalysisBoolean.NULL ? user.getAnalysis().getHasResidence().value() : null,
                user.getAnalysis().getHasExperience() != UserAnalysisBoolean.NULL ? user.getAnalysis().getHasExperience().value() : null,
                user.getAnalysis().getHasIdea() != UserAnalysisBoolean.NULL ? user.getAnalysis().getHasIdea().value() : null,
                user.getAnalysis().getHasStudied() != UserAnalysisBoolean.NULL ? user.getAnalysis().getHasStudied().value() : null
        );
    }
}
