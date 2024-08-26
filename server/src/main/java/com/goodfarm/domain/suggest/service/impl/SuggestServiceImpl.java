package com.goodfarm.domain.suggest.service.impl;

import com.goodfarm.domain.suggest.domain.entity.SuggestBook;
import com.goodfarm.domain.suggest.domain.entity.SuggestLand;
import com.goodfarm.domain.suggest.domain.entity.SuggestLocation;
import com.goodfarm.domain.suggest.dto.request.*;
import com.goodfarm.domain.suggest.dto.response.SuggestBookResponse;
import com.goodfarm.domain.suggest.dto.response.SuggestLandResponse;
import com.goodfarm.domain.suggest.dto.response.SuggestLocationResponse;
import com.goodfarm.domain.suggest.error.SuggestLocationError;
import com.goodfarm.domain.suggest.repository.SuggestBookRepository;
import com.goodfarm.domain.suggest.repository.SuggestLandRepository;
import com.goodfarm.domain.suggest.repository.SuggestLocationRepository;
import com.goodfarm.domain.suggest.service.SuggestService;
import com.goodfarm.global.error.CustomException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SuggestServiceImpl implements SuggestService {
    private final SuggestBookRepository suggestBookRepository;
    private final SuggestLandRepository suggestLandRepository;
    private final SuggestLocationRepository suggestLocationRepository;

    @Override
    public List<SuggestBookResponse> suggestBooks() {
            return suggestBookRepository.findAll().stream()
                    .map(SuggestBookResponse::of)
                    .collect(Collectors.toList());
    }

    @Override
    public void suggestBook(SuggestBookRequest request) {
        SuggestBook book = SuggestBook.builder()
                .title(request.title())
                .author(request.author())
                .summary(request.summary())
                .cover(request.cover())
                .url(request.url())
                .build();

        suggestBookRepository.save(book);
    }

    @Override
    public List<SuggestLandResponse> suggestLands(String location) {
        if (location == null) {
            return suggestLandRepository.findTop5ByOrderByIdAsc().stream()
                    .map(SuggestLandResponse::of)
                    .collect(Collectors.toList());
        } else {
            SuggestLocation loc = suggestLocationRepository.findByName(location)
                    .orElseThrow(() -> new CustomException(SuggestLocationError.LOCATION_NOT_FOUND));

            return suggestLandRepository.findTop5ByLocationOrderByIdAsc(loc).stream()
                    .map(SuggestLandResponse::of)
                    .collect(Collectors.toList());
        }
    }

    @Override
    public void suggestLand(SuggestLandRequest request) {
        SuggestLocation location = suggestLocationRepository.findByName(request.location())
                .orElseThrow(() -> new CustomException(SuggestLocationError.LOCATION_NOT_FOUND));
        SuggestLand land = SuggestLand.builder()
                .name(request.name())
                .address(request.address())
                .area(request.area())
                .price(request.price())
                .cover(request.cover())
                .latitude(request.latitude())
                .longitude(request.longitude())
                .location(location)
                .build();

        suggestLandRepository.save(land);
    }

    @Override
    public void updateLand(Long landId, SuggestLandUpdateRequest request) {
        SuggestLand land = suggestLandRepository.findById(landId)
                .orElseThrow(() -> new CustomException(SuggestLocationError.LOCATION_NOT_FOUND));

        land.setPrice(request.price());

        suggestLandRepository.save(land);
    }

    @Override
    public List<SuggestLocationResponse> suggestLocations() {
        return suggestLocationRepository.findTop5ByOrderByIdAsc().stream()
                .map(SuggestLocationResponse::of)
                .collect(Collectors.toList());
    }

    @Override
    public void suggestLocations(SuggestLocationRequest request) {
        SuggestLocation location = SuggestLocation.builder()
                .name(request.name())
                .population(request.population())
                .latitude(request.latitude())
                .longitude(request.longitude())
                .logo(request.logo())
                .build();

        suggestLocationRepository.save(location);
    }

    @Override
    public void updateLocation(String locationName, SuggestLocationUpdateRequest request) {
        SuggestLocation location = suggestLocationRepository.findByName(locationName)
                .orElseThrow(() -> new CustomException(SuggestLocationError.LOCATION_NOT_FOUND));

        location.setPopulation(request.population());

        suggestLocationRepository.save(location);
    }
}
