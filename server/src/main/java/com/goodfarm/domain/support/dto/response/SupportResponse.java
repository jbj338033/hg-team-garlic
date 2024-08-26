package com.goodfarm.domain.support.dto.response;

import com.goodfarm.domain.support.domain.entity.Support;
import com.goodfarm.domain.support.domain.enums.SupportCategory;

import java.time.LocalDate;

public record SupportResponse(
        String title,
        String target,
        String content,
        LocalDate deadline,
        String url,
        SupportCategory category,
        String host
) {
    public static SupportResponse of(Support support) {
        return new SupportResponse(
                support.getTitle(),
                support.getTarget(),
                support.getContent(),
                support.getDeadline(),
                support.getUrl(),
                support.getCategory(),
                support.getHost()
        );
    }
}
