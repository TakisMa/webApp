package com.webproject.webapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "bids")
public class Bid {

    @Id
    private String id;

    @Column(name = "bid_time", nullable = false)
    private String bidTime;
    private Double amount;


    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id")
    private User bidder;

    public Bid(String bidTime, Double amount, Item item, User bidder) {
        this.bidTime = bidTime;
        this.amount = amount;
        this.item = item;
        this.bidder = bidder;
    }

    @PrePersist
    public void onPrePersist() {
        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        LocalDateTime dateTimeStartBid = LocalDateTime.now();
        bidTime = dateTimeStartBid.format(format);
    }
}
