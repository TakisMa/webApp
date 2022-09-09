package com.webproject.webapi.rest.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ItemDto {

    private Long id;
    private String name;
    private String category;
    private Double currently;
    private Double buyPrice;
    private String description;

    private UserDto seller;

    @Data
    public static final class UserDto {
        private String username;
    }

}
