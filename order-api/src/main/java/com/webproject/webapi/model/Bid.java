package com.webproject.webapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "bids")
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "bid_time", nullable = false)
    private LocalDateTime bidTime;
    private Double amount;


    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(
        name = "user_bid",
        joinColumns = @JoinColumn(name = "bid_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    Set<User> bidders = new HashSet<>();

    public Bid(LocalDateTime bidTime, Double amount, Item item, Set<User> bidders) {
        this.bidTime = bidTime;
        this.amount = amount;
        this.item = item;
        this.bidders = bidders;
    }
}
