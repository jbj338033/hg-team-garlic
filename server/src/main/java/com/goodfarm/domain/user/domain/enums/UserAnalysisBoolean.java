package com.goodfarm.domain.user.domain.enums;

public enum UserAnalysisBoolean {
    NULL,
    TRUE,
    FALSE;

    public static UserAnalysisBoolean of(Boolean value) {
        if (value == null) {
            return NULL;
        }
        return value ? TRUE : FALSE;
    }

    public boolean value() {
        return this == TRUE;
    }
}
