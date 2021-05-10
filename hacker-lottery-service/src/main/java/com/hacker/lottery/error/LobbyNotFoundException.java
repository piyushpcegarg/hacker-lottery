package com.hacker.lottery.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Lobby Not Found")
public class LobbyNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    
}
