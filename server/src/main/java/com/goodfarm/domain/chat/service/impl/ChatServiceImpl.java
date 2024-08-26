package com.goodfarm.domain.chat.service.impl;

import com.goodfarm.domain.chat.dto.response.ChatResponse;
import com.goodfarm.domain.chat.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.azure.openai.AzureOpenAiChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {
    private final AzureOpenAiChatModel chatModel;

    @Override
    public ChatResponse chat(String message) {
        org.springframework.ai.chat.model.ChatResponse response = chatModel.call(new Prompt(message));

        return new ChatResponse(
                response.getResult().getOutput().getContent(), new ArrayList<>()
        );
    }
}
