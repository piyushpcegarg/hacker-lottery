package com.hacker.lottery.repository;

import com.hacker.lottery.model.Member;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    
}
