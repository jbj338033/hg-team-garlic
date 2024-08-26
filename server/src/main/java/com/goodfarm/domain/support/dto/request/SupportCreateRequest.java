package com.goodfarm.domain.support.dto.request;

import com.goodfarm.domain.support.domain.enums.SupportCategory;

import java.time.LocalDate;

public record SupportCreateRequest(
        String title,
        String target,
        String content,
        LocalDate deadline,
        String url,
        SupportCategory category,
        String host
) {
}
