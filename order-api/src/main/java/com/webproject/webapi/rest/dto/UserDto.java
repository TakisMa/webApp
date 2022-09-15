package com.webproject.webapi.rest.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.List;

@Data
public class UserDto {

    private Long id;
    private String username;
    private String name;
    private String email;
    private String role;
    private List<OrderDto> orders;
    private List<ItemDto> items;

    @Data
    public static final class OrderDto {
        private String id;
        private String description;
        private ZonedDateTime createdAt;
    }

    @Data
    public static final class ItemDto {
        private String id;
        private String name;
        private String category;
        private Double currently;
        private Double buyPrice;
        private String started;
        private String ends;
        private String description;
    }
}
