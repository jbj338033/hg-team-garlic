package com.goodfarm.domain.user.domain.entity;

import com.goodfarm.domain.user.domain.enums.UserAnalysisBoolean;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "user_analysis")
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@RequiredArgsConstructor
public class UserAnalysis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 귀농할 장소
    private String location = "";

    // 자금이 있음
    @Enumerated(EnumType.STRING)
    private UserAnalysisBoolean hasMoney = UserAnalysisBoolean.NULL;

    // 토지가 있음
    @Enumerated(EnumType.STRING)
    private UserAnalysisBoolean hasLand = UserAnalysisBoolean.NULL;

    // 거주지 있음
    @Enumerated(EnumType.STRING)
    private UserAnalysisBoolean hasResidence = UserAnalysisBoolean.NULL;

    // 농사 경험이 있음
    @Enumerated(EnumType.STRING)
    private UserAnalysisBoolean hasExperience = UserAnalysisBoolean.NULL;

    // 사업 아이템이 있음
    @Enumerated(EnumType.STRING)
    private UserAnalysisBoolean hasIdea = UserAnalysisBoolean.NULL;

    // 공부를 했음
    @Enumerated(EnumType.STRING)
    private UserAnalysisBoolean hasStudied = UserAnalysisBoolean.NULL;

    public boolean isCompleted() {
        return !("".equals(location)) && hasMoney != UserAnalysisBoolean.NULL && hasLand != UserAnalysisBoolean.NULL && hasResidence != UserAnalysisBoolean.NULL && hasExperience != UserAnalysisBoolean.NULL && hasIdea != UserAnalysisBoolean.NULL && hasStudied != UserAnalysisBoolean.NULL;
    }
}
