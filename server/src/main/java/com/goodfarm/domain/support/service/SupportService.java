package com.goodfarm.domain.support.service;

import com.goodfarm.domain.support.domain.enums.SupportCategory;
import com.goodfarm.domain.support.dto.request.SupportCreateRequest;
import com.goodfarm.domain.support.dto.response.SupportResponse;

import java.util.List;

public interface SupportService {
    List<SupportResponse> getSupports(SupportCategory category);

    void createSupport(SupportCreateRequest request);
}
