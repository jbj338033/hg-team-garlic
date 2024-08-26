package com.goodfarm.domain.suggest.dto.request;

public record SuggestLandRequest(
        String name,
        String address,
        int area,
        int price,
        double latitude,
        double longitude,
        String location
) {
}
