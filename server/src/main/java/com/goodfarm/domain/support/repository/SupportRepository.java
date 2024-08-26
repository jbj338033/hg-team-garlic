package com.goodfarm.domain.support.repository;

import com.goodfarm.domain.support.domain.entity.Support;
import com.goodfarm.domain.support.domain.enums.SupportCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SupportRepository extends JpaRepository<Support, Long> {
    List<Support> findAllByCategory(SupportCategory category);
}
