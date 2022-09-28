package com.webproject.webapi.mapper;

import com.webproject.webapi.model.Bid;
import com.webproject.webapi.rest.dto.BidDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.context.annotation.Configuration;

@Configuration
@Mapper(componentModel = "spring")
public interface BidMapper {


    @Mapping(target = "bidder", ignore = true)
    BidDto toBidDto(Bid bid);

}
