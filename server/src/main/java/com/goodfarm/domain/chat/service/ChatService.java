package com.goodfarm.domain.chat.service;

import com.goodfarm.domain.chat.dto.response.ChatResponse;

public interface ChatService {
    ChatResponse chat(String message);
}
