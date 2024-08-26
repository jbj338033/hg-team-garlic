package com.goodfarm.domain.suggest.dto.response;

import com.goodfarm.domain.suggest.domain.entity.SuggestLand;

public record SuggestLandResponse(
        String name,
        double latitude,
        double longitude,
        String cover,
        String address,
        int area,
        int price,
        String url
) {
    public static SuggestLandResponse of(SuggestLand land) {
        return new SuggestLandResponse(
                land.getName(),
                land.getLatitude(),
                land.getLongitude(),
                land.getCover(),
                land.getAddress(),
                land.getArea(),
                land.getPrice(),
                land.getUrl()
        );
    }
}