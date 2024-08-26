package com.goodfarm.domain.suggest.repository;

import com.goodfarm.domain.suggest.domain.entity.SuggestLand;
import com.goodfarm.domain.suggest.domain.entity.SuggestLocation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SuggestLandRepository extends JpaRepository<SuggestLand, Long> {
    List<SuggestLand> findTop5ByOrderByIdAsc();
    List<SuggestLand> findTop5ByLocationOrderByIdAsc(SuggestLocation location);
}
