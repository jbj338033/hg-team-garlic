package com.goodfarm.domain.news.dto.response;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Data
@Getter
@RequiredArgsConstructor
public class NewsResponse {
    private Object data;
}
