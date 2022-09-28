package com.webproject.webapi.rest.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;


@Data
public class ItemDto {

    private String id;
    private String name;
    private String category;
    private Double currently;
    private Double buyPrice;
    private String started;
    private String ends;
    private String description;

    private UserDto seller;
    private BidDto highestBid;


    @Data
    public static final class UserDto {
        private String username;
    }

    @Data
    public static final class BidDto {
        private Double amount;
    }

}
