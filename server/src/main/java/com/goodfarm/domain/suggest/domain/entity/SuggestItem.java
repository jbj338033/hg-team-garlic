package com.goodfarm.domain.suggest.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "suggest_items")
@Getter
@SuperBuilder
@NoArgsConstructor
public class SuggestItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


}
