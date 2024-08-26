package com.goodfarm.global.security.holder;

import com.goodfarm.domain.user.domain.entity.User;

public interface SecurityHolder {
    User getUser();
}
