package com.hacker.lottery.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Lobby Already Full or Closed")
public class LobbyFullException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    
}
