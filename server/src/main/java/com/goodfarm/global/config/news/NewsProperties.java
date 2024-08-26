package com.goodfarm.global.config.news;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@Setter
@ConfigurationProperties(prefix = "news")
public class NewsProperties {
    private String apiKey;
}
