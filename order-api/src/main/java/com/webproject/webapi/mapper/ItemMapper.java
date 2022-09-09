package com.webproject.webapi.mapper;

import com.webproject.webapi.model.Item;
import com.webproject.webapi.rest.dto.CreateItemRequest;
import com.webproject.webapi.rest.dto.ItemDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.context.annotation.Configuration;

@Configuration
@Mapper(componentModel = "spring")
public interface ItemMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "seller", ignore = true)
    Item toItem(CreateItemRequest createItemRequest);


    ItemDto toItemDto(Item item);
}
