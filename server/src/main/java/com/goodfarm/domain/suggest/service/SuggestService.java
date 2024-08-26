package com.goodfarm.domain.suggest.service;

import com.goodfarm.domain.suggest.dto.request.*;
import com.goodfarm.domain.suggest.dto.response.SuggestBookResponse;
import com.goodfarm.domain.suggest.dto.response.SuggestLandResponse;
import com.goodfarm.domain.suggest.dto.response.SuggestLocationResponse;

import java.util.List;

public interface SuggestService {
    List<SuggestBookResponse> suggestBooks();

    void suggestBook(SuggestBookRequest request);

    List<SuggestLandResponse> suggestLands(String location);

    void suggestLand(SuggestLandRequest request);

    void updateLand(Long landId, SuggestLandUpdateRequest request);

    List<SuggestLocationResponse> suggestLocations();

    void suggestLocations(SuggestLocationRequest request);

    void updateLocation(String locationName, SuggestLocationUpdateRequest request);
}
