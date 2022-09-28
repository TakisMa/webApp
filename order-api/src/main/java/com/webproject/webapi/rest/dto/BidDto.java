package com.webproject.webapi.rest.dto;

import lombok.Data;

@Data
public class BidDto {

    private String id;
    private Double amount;

    private UserDto bidder;
    private ItemDto item;

    @Data
    public static final class ItemDto {
        private String id;
        private String name;
    }

    @Data
    public static final class UserDto {
        private String username;
    }

}
