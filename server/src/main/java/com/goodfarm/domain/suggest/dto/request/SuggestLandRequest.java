package com.goodfarm.domain.suggest.dto.request;

public record SuggestLandRequest(
        String name,
        String address,
        int area,
        int price,
        String cover,
        double latitude,
        double longitude,
        String location,
        String url
) {
}
