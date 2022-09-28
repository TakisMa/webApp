package com.webproject.webapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "items")
public class Item {

    @Id
    private String id;

    private String name;
    private String category;
    private Double currently;
    @Column(name = "buy_price", nullable = true)
    private Double buyPrice;
    @Column(name = "first_bid")
    private Double firstBid;
    @Column(name = "number_of_bids")
    private Integer numberOfBids;
    private String started;
    private String ends;
    private String description;


    @OneToOne(mappedBy = "item", cascade = CascadeType.MERGE)
    private Bid bid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User seller;


    public Item(String name, String category, Double currently, Double buyPrice, Double firstBid, Integer numberOfBids, String ends, String description) {
        this.name = name;
        this.category = category;
        this.currently = currently;
        this.buyPrice = buyPrice;
        this.firstBid = firstBid;
        this.numberOfBids = numberOfBids;
        this.ends = ends;
        this.description = description;
    }


    @PrePersist
    public void onPrePersist() {
        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        LocalDateTime dateTimeStart = LocalDateTime.now();
        LocalDateTime dateTimeEnd = LocalDateTime.now().plusDays(7);
        started = dateTimeStart.format(format);
        ends = dateTimeEnd.format(format);
    }
}
