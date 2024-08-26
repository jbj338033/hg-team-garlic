package com.goodfarm.domain.suggest.controller;

import com.goodfarm.domain.suggest.dto.response.SuggestLandResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/suggests")
@RequiredArgsConstructor
public class SuggestController {
    @GetMapping("/land")
    public SuggestLandResponse suggestLand() {
        return new SuggestLandResponse("name", 0.0, 0.0);
    }
}