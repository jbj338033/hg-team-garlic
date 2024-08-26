package com.goodfarm.domain.support.domain.entity;

import com.goodfarm.domain.support.domain.enums.SupportCategory;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;

@Entity
@Table(name = "supports")
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Support {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String target;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDate deadline;

    @Column(nullable = false)
    private String url;

    @Enumerated(EnumType.STRING)
    private SupportCategory category;

    @Column(nullable = false)
    private String host;
}
