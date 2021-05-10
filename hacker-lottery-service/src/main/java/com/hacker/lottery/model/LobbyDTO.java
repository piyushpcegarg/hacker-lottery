package com.hacker.lottery.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LobbyDTO {

    @NotBlank(message = "Name is mandatory")
    private String name;
    
    @NotNull(message = "Entry Fees is mandatory")
    private Integer entryFees;
    
    @NotNull(message = "Max members is mandatory")
    private Integer maxMembers;
    
}
