package com.hacker.lottery.repository;

import com.hacker.lottery.model.Lobby;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LobbyRepository extends JpaRepository<Lobby, Integer> {
    
}
