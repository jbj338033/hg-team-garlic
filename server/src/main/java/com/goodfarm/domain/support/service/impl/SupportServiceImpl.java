package com.goodfarm.domain.support.service.impl;

import com.goodfarm.domain.support.domain.entity.Support;
import com.goodfarm.domain.support.domain.enums.SupportCategory;
import com.goodfarm.domain.support.dto.request.SupportCreateRequest;
import com.goodfarm.domain.support.dto.response.SupportResponse;
import com.goodfarm.domain.support.repository.SupportRepository;
import com.goodfarm.domain.support.service.SupportService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SupportServiceImpl implements SupportService {
    private final SupportRepository supportRepository;

    @Override
    public List<SupportResponse> getSupports(SupportCategory category) {
        if (category == null) {
            return supportRepository.findAll().stream()
                    .map(SupportResponse::of)
                    .toList();
        } else {
            return supportRepository.findAllByCategory(category).stream()
                    .map(SupportResponse::of)
                    .toList();
        }
    }

    @Override
    public void createSupport(SupportCreateRequest request) {
        Support support = Support.builder()
                .title(request.title())
                .target(request.target())
                .content(request.content())
                .deadline(request.deadline())
                .url(request.url())
                .category(request.category())
                .host(request.host())
                .build();

        supportRepository.save(support);
    }
}
