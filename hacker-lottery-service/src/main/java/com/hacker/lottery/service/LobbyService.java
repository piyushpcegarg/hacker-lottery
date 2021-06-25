package com.hacker.lottery.service;

import java.util.List;
import java.util.Random;

import com.github.javafaker.Faker;
import com.hacker.lottery.error.LobbyFullException;
import com.hacker.lottery.error.LobbyNotFoundException;
import com.hacker.lottery.error.LobbyNotFullException;
import com.hacker.lottery.model.Lobby;
import com.hacker.lottery.model.LobbyDTO;
import com.hacker.lottery.model.LobbyStatus;
import com.hacker.lottery.model.Member;
import com.hacker.lottery.repository.LobbyRepository;
import com.hacker.lottery.repository.MemberRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LobbyService {

    private final LobbyRepository lobbyRepository;
  
    private final MemberRepository memberRepository;
    
    private final Faker faker;
    
    private final Random random;
    
    public LobbyService(LobbyRepository lobbyRepository, MemberRepository memberRepository) {
        this.lobbyRepository = lobbyRepository;
        this.memberRepository = memberRepository;
        this.faker = new Faker();
        this.random = new Random();
    }
    
    public List<Lobby> getAllLobby() {
        return lobbyRepository.findAll();
    }
    
    public Lobby getLobbyDetatils(Integer lobbyId) {
        return lobbyRepository.findById(lobbyId).orElseThrow(LobbyNotFoundException::new);
    }
    
    public Lobby createLobby(LobbyDTO lobbyDTO) {
        
        var lobby = new Lobby();
        BeanUtils.copyProperties(lobbyDTO, lobby);

        lobby.setPrizeMoney(lobbyDTO.getEntryFees() * lobbyDTO.getMaxMembers() * 95 / 100);
        lobby.setLobbyCharges(lobbyDTO.getEntryFees() * lobbyDTO.getMaxMembers() * 5 / 100);
        lobby.setActiveMembers(0);
        lobby.setStatus(LobbyStatus.OPEN);

        return lobbyRepository.save(lobby);
    }
    
    public void addMember(Integer lobbyId) {

        var lobby = lobbyRepository.findById(lobbyId).orElse(null);

        if (lobby == null)
            throw new LobbyNotFoundException();

        if (lobby.getStatus() != LobbyStatus.OPEN)
            throw new LobbyFullException();

        int activeMembers = lobby.getActiveMembers();
        if (activeMembers == lobby.getMaxMembers() - 1)
            lobby.setStatus(LobbyStatus.FULL);
        lobby.setActiveMembers(activeMembers + 1);
        lobbyRepository.save(lobby);

        var member = new Member();
        member.setLobby(lobby);
        member.setName(faker.name().firstName());
        memberRepository.save(member);
    }
    
    public void startLobby(Integer lobbyId) {

        var lobby = lobbyRepository.findById(lobbyId).orElse(null);

        if (lobby == null)
            throw new LobbyNotFoundException();

        if (lobby.getStatus() != LobbyStatus.FULL)
            throw new LobbyNotFullException();

        int maxMembers = lobby.getMaxMembers();
        int randomIndex = random.nextInt(maxMembers);
        String winner = ((Member)lobby.getMembers().get(randomIndex)).getName();
        lobby.setWinner(winner);
        lobby.setStatus(LobbyStatus.CLOSE);

        lobbyRepository.save(lobby);
    }
}
