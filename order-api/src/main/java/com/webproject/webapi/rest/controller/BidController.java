package com.webproject.webapi.rest.controller;

import com.webproject.webapi.config.SwaggerConfig;
import com.webproject.webapi.mapper.BidMapper;
import com.webproject.webapi.model.Bid;
import com.webproject.webapi.model.Item;
import com.webproject.webapi.model.User;
import com.webproject.webapi.rest.request.BidRequest;
import com.webproject.webapi.security.CustomUserDetails;
import com.webproject.webapi.service.BidService;
import com.webproject.webapi.service.ItemService;
import com.webproject.webapi.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/bids")
public class BidController {

    private final UserService userService;
    private final ItemService itemService;
    private final BidService bidService;
    private final BidMapper bidMapper;

    @Operation(security = {@SecurityRequirement(name = SwaggerConfig.BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping
    public Double getHighestBid(@RequestParam(value = "id") String id) {
        Bid highestAmount = bidService.getHighestAmount(id);
        return highestAmount.getAmount();
    }

    @Operation(security = {@SecurityRequirement(name = SwaggerConfig.BEARER_KEY_SECURITY_SCHEME)})
    @PostMapping()
    public int setBid(@AuthenticationPrincipal CustomUserDetails currentUser, @RequestBody BidRequest bidRequest) {

        User user = userService.validateAndGetUserByUsername(currentUser.getUsername());
        Item item = itemService.getItemById(bidRequest.getItemId());
        Bid bid = new Bid();
        bid.setBidder(user);
        bid.setItem(item);
        log.info(String.format("new Amount: %s", bidRequest.getNewAmount()));
        bid.setAmount(bidRequest.getNewAmount());
        bid.setId(UUID.randomUUID().toString());

        bid = bidService.saveBid(bid);
        item.setBid(bid);


        return itemService.updateItemCurrently(bidRequest.getNewAmount(), item.getId());


    }

}
