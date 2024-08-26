package com.goodfarm.domain.suggest.dto.request;

public record SuggestLocationRequest(
        String name,
        int population,
        double latitude,
        double longitude,
        String logo,
        String url
) {
}
