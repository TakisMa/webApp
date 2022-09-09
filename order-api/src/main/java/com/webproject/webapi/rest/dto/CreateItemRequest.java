package com.webproject.webapi.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Data
public class CreateItemRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String category;

    @NotBlank
    private Double currently;

    private Double buyPrice;

    @NotBlank
    private String description;
}
