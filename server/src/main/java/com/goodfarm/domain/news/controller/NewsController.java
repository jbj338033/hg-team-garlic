package com.goodfarm.domain.news.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.goodfarm.domain.news.dto.response.NewsResponse;
import com.goodfarm.global.config.news.NewsProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Calendar;

@RestController
@RequestMapping("/news")
@RequiredArgsConstructor
public class NewsController {
    private final NewsProperties newsProperties;

    @GetMapping
    public Object getNews() throws JsonProcessingException {
        WebClient client = WebClient.create("https://api-v2.deepsearch.com");
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH) + 1;
        int date = calendar.get(Calendar.DATE);
        calendar.add(Calendar.DAY_OF_MONTH, -7);
        int yearFrom = calendar.get(Calendar.YEAR);
        int monthFrom = calendar.get(Calendar.MONTH) + 1;
        int dateFrom = calendar.get(Calendar.DATE);

        NewsResponse response = client.get()
                .uri("/v1/articles?keyword=농업&date_from=" + yearFrom + "-" + monthFrom + "-" + dateFrom + "&date_to=" + year + "-" + month + "-" + date + "&api_key=" + newsProperties.getApiKey() + "&page_size=5")
                .retrieve()
                .bodyToMono(NewsResponse.class)
                .block();

        if (response == null) {
            return null;
        }

        return response.getData();
    }
}
