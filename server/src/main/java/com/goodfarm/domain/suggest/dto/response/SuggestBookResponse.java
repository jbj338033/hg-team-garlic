package com.goodfarm.domain.suggest.dto.response;

import com.goodfarm.domain.suggest.domain.entity.SuggestBook;

public record SuggestBookResponse(
        String title,
        String author,
        String summary,
        String cover,
        String url
) {
    public static SuggestBookResponse of(SuggestBook book) {
        return new SuggestBookResponse(
                book.getTitle(),
                book.getAuthor(),
                book.getSummary(),
                book.getCover(),
                book.getUrl()
        );
    }
}
