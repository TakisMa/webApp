package com.webproject.webapi.mapper;

import com.webproject.webapi.model.User;
import com.webproject.webapi.rest.dto.UserDto;
import org.mapstruct.Mapper;
import org.springframework.context.annotation.Configuration;

@Configuration
@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);
}
