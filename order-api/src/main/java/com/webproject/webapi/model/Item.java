package com.webproject.webapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String category;
    private Double currently;
    @Column(name = "buy_price", nullable = true)
    private Double buyPrice;
    @Column(name = "first_bid")
    private Double firstBid;
    @Column(name = "number_of_bids")
    private Integer numberOfBids;
    private LocalDateTime started;
    private LocalDateTime ends;
    private String description;


    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<Bid> bids = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id")
    private User seller;


    public Item(String name, String category, Double currently, Double buyPrice, Double firstBid, Integer numberOfBids, LocalDateTime ends, String description, User user) {
        this.name = name;
        this.category = category;
        this.currently = currently;
        this.buyPrice = buyPrice;
        this.firstBid = firstBid;
        this.numberOfBids = numberOfBids;
        this.ends = ends;
        this.description = description;
        this.seller = user;
    }


    @PrePersist
    public void onPrePersist() {
        started = LocalDateTime.now();
        ends = LocalDateTime.now().plusDays(7);
    }
}
