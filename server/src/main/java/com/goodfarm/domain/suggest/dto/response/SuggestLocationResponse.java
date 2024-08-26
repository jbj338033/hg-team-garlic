package com.goodfarm.domain.suggest.dto.response;

import com.goodfarm.domain.suggest.domain.entity.SuggestLocation;

public record SuggestLocationResponse(
        String name,
        int population,
        double latitude,
        double longitude
) {
    public static SuggestLocationResponse of(SuggestLocation location) {
        return new SuggestLocationResponse(
                location.getName(),
                location.getPopulation(),
                location.getLatitude(),
                location.getLongitude()
        );
    }
}
