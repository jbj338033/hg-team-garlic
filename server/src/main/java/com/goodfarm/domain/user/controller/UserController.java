package com.goodfarm.domain.user.controller;

import com.goodfarm.domain.user.dto.response.UserResponse;
import com.goodfarm.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/me")
    public UserResponse getMe() {
        return userService.getMe();
    }

    @PostMapping("/me/location")
    public void setLocation(String location) {
        userService.setLocation(location);
    }

    @PostMapping("/me/hasMoney")
    public void setHasMoney(boolean hasMoney) {
        userService.setHasMoney(hasMoney);
    }

    @PostMapping("/me/hasLand")
    public void setHasLand(boolean hasLand) {
        userService.setHasLand(hasLand);
    }

    @PostMapping("/me/hasResidence")
    public void setHasResidence(boolean hasResidence) {
        userService.setHasResidence(hasResidence);
    }

    @PostMapping("/me/hasExperience")
    public void setHasExperience(boolean hasExperience) {
        userService.setHasExperience(hasExperience);
    }

    @PostMapping("/me/hasIdea")
    public void setHasIdea(boolean hasIdea) {
        userService.setHasIdea(hasIdea);
    }

    @PostMapping("/me/hasStudied")
    public void setHasStudied(boolean hasStudied) {
        userService.setHasStudied(hasStudied);
    }
}
