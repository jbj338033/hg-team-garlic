package com.goodfarm.domain.suggest.service.impl;

import com.goodfarm.domain.suggest.dto.response.SuggestLandResponse;
import com.goodfarm.domain.suggest.service.SuggestService;
import org.springframework.stereotype.Service;

@Service
public class SuggestServiceImpl implements SuggestService {
    @Override
    public SuggestLandResponse suggestLand() {
        return new SuggestLandResponse("name", 0.0, 0.0);
    }
}
