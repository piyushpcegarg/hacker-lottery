package com.hacker.lottery.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;

@Data
@Entity
@Table(name = "lobby")
public class Lobby {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String name;
    
    private Integer entryFees;
    
    private Integer maxMembers;
    
    private Integer prizeMoney;
    
    private Integer lobbyCharges;
    
    private Integer activeMembers;
    
    private String winner;
    
    private LobbyStatus status;
    
    @JsonManagedReference
    @OneToMany(mappedBy = "lobby")
    private List<Member> members;
    
}
