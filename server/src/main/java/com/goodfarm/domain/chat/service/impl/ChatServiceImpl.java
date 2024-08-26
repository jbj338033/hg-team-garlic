package com.goodfarm.domain.chat.service.impl;

import com.goodfarm.domain.chat.dto.response.ChatResponse;
import com.goodfarm.domain.chat.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.azure.openai.AzureOpenAiChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {
    private static List<String> RECOMMENDATIONS = new ArrayList(
            "귀농을 하고 싶어요!",
            "농업에 대해 더 알고 싶어요!",
            "농업에 대한 정보를 알려주세요!",
            "농업에 대한 정보를 알고 싶어요!",
            "농업에 필요한 정보를 알려주세요!"
    );
    private final AzureOpenAiChatModel chatModel;

    @Override
    public ChatResponse chat(String message) {
        org.springframework.ai.chat.model.ChatResponse response = chatModel.call(new Prompt(message));

        Collections.shuffle(RECOMMENDATIONS);

        return new ChatResponse(
                response.getResult().getOutput().getContent(), RECOMMENDATIONS.stream().limit(3).toList()
        );
    }
}
