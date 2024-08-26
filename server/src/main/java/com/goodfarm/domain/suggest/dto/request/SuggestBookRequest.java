package com.goodfarm.domain.suggest.dto.request;

public record SuggestBookRequest(
        String title,
        String author,
        String summary
) {
}
