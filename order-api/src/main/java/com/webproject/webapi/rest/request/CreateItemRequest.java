package com.webproject.webapi.rest.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class CreateItemRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String category;

    private Double currently;

    private Double buyPrice;

    private String ends;

    @NotBlank
    private String description;
}
