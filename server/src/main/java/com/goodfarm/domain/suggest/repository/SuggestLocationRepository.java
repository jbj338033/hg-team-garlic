package com.goodfarm.domain.suggest.repository;

import com.goodfarm.domain.suggest.domain.entity.SuggestLocation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SuggestLocationRepository extends JpaRepository<SuggestLocation, Long> {
    List<SuggestLocation> findTop5ByOrderByIdAsc();

    Optional<SuggestLocation> findByName(String name);
}
