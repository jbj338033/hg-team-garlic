package com.goodfarm.domain.chat.controller;

import com.goodfarm.domain.chat.dto.response.ChatResponse;
import com.goodfarm.domain.chat.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
public class ChatController {
    private final ChatService chatService;

    @GetMapping
    public ChatResponse chat(@RequestParam String message) {
        return chatService.chat(message);
    }
}
