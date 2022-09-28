package com.webproject.webapi.rest.controller;

import com.webproject.webapi.config.SwaggerConfig;
import com.webproject.webapi.mapper.ItemMapper;
import com.webproject.webapi.model.Item;
import com.webproject.webapi.model.User;
import com.webproject.webapi.rest.request.CreateItemRequest;
import com.webproject.webapi.rest.dto.ItemDto;
import com.webproject.webapi.security.CustomUserDetails;
import com.webproject.webapi.service.ItemService;
import com.webproject.webapi.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/items")
public class ItemController {

    private final UserService userService;
    private final ItemService itemService;
    private final ItemMapper itemMapper;

    @Operation(security = {@SecurityRequirement(name = SwaggerConfig.BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping
    public List<ItemDto> getItems(@RequestParam(value = "text", required = false) String text) {
        List<Item> items = (text == null) ? itemService.getItems() : itemService.getItemsContainingText(text);
        return items.stream()
            .map(itemMapper::toItemDto)
            .collect(Collectors.toList());
    }


    @Operation(security = {@SecurityRequirement(name = SwaggerConfig.BEARER_KEY_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ItemDto createItem(@AuthenticationPrincipal CustomUserDetails currentUser,
                                @Valid @RequestBody CreateItemRequest createItemRequest) {
        User user = userService.validateAndGetUserByUsername(currentUser.getUsername());
        Item item = itemMapper.toItem(createItemRequest);
        item.setId(UUID.randomUUID().toString());
        item.setSeller(user);

        return itemMapper.toItemDto(itemService.saveItem(item));
    }



}
