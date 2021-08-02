package com.hacker.lottery.controller;

import java.util.List;

import javax.validation.Valid;

import com.hacker.lottery.model.Lobby;
import com.hacker.lottery.model.LobbyDTO;
import com.hacker.lottery.service.LobbyService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = {"/lobby"})
public class LobbyController {

    private final LobbyService lobbyService;
  
    public LobbyController(LobbyService lobbyService) {
        this.lobbyService = lobbyService;
    }
    
    @GetMapping
    public List<Lobby> getAllLobby() {
        return this.lobbyService.getAllLobby();
    }
    
    @GetMapping({"/{id}"})
    public Lobby getLobbyDetails(@PathVariable("id") Integer lobbyId) {
        return this.lobbyService.getLobbyDetatils(lobbyId);
    }
    
    @PostMapping
    public Lobby createLobby(@Valid @RequestBody LobbyDTO lobbyDTO) {
        return this.lobbyService.createLobby(lobbyDTO);
    }
    
    @PostMapping({"/{id}/member"})
    public void addMember(@PathVariable("id") Integer lobbyId) {
        this.lobbyService.addMember(lobbyId);
    }
    
    @PostMapping({"/{id}/start"})
    public void startLobby(@PathVariable("id") Integer lobbyId) {
        this.lobbyService.startLobby(lobbyId);
    }
}
