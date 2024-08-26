package com.goodfarm.domain.support.controller;

import com.goodfarm.domain.support.domain.enums.SupportCategory;
import com.goodfarm.domain.support.dto.request.SupportCreateRequest;
import com.goodfarm.domain.support.dto.response.SupportResponse;
import com.goodfarm.domain.support.service.SupportService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supports")
@RequiredArgsConstructor
public class SupportController {
    private final SupportService supportService;

    @GetMapping
    public List<SupportResponse> getSupports(@RequestParam(required = false) SupportCategory category) {
        return supportService.getSupports(category);
    }

    @PostMapping
    public void createSupport(@RequestBody SupportCreateRequest request) {
        supportService.createSupport(request);
    }
}
