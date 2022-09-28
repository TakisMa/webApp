package com.webproject.webapi.rest.request;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@Data
public class BidRequest {

    @NotBlank
    String itemId;

    @NotBlank
    Double newAmount;

}
