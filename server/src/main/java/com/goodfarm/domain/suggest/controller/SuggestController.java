package com.goodfarm.domain.suggest.controller;

import com.goodfarm.domain.suggest.dto.request.*;
import com.goodfarm.domain.suggest.dto.response.SuggestBookResponse;
import com.goodfarm.domain.suggest.dto.response.SuggestLandResponse;
import com.goodfarm.domain.suggest.dto.response.SuggestLocationResponse;
import com.goodfarm.domain.suggest.service.SuggestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/suggests")
@RequiredArgsConstructor
public class SuggestController {
    private final SuggestService suggestService;

    @GetMapping("/books")
    public List<SuggestBookResponse> suggestBooks() {
        return suggestService.suggestBooks();
    }

    @PostMapping("/books")
    public void suggestBook(@RequestBody SuggestBookRequest request) {
        suggestService.suggestBook(request);
    }

    @GetMapping("/lands")
    public List<SuggestLandResponse> suggestLands(@RequestParam(required = false) String location) {
        return suggestService.suggestLands(location);
    }

    @PostMapping("/lands")
    public void suggestLand(@RequestBody SuggestLandRequest request) {
        suggestService.suggestLand(request);
    }

    @PatchMapping("/lands/{landId}")
    public void updateLand(@PathVariable Long landId, @RequestBody SuggestLandUpdateRequest request) {
        suggestService.updateLand(landId, request);
    }

    @GetMapping("/locations")
    public List<SuggestLocationResponse> suggestLocations() {
        return suggestService.suggestLocations();
    }

    @PostMapping("/locations")
    public void suggestLocations(@RequestBody SuggestLocationRequest request) {
        suggestService.suggestLocations(request);
    }

    @PatchMapping("/locations/{locationName}")
    public void updateLocation(@PathVariable String locationName, @RequestBody SuggestLocationUpdateRequest request) {
        suggestService.updateLocation(locationName, request);
    }
}