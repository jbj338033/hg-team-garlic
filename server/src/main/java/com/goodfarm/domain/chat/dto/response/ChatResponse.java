package com.goodfarm.domain.chat.dto.response;

import java.util.List;

public record ChatResponse(
        String answer,
        List<String> recommendations
) {
}
