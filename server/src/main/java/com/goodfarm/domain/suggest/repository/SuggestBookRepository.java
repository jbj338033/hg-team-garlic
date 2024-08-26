package com.goodfarm.domain.suggest.repository;

import com.goodfarm.domain.suggest.domain.entity.SuggestBook;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SuggestBookRepository extends JpaRepository<SuggestBook, Long> {
    List<SuggestBook> findTop5ByOrderByIdAsc();
}
