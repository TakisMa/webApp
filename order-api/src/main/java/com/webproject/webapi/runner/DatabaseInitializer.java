package com.webproject.webapi.runner;

import com.webproject.webapi.model.Bid;
import com.webproject.webapi.model.Item;
import com.webproject.webapi.model.User;
import com.webproject.webapi.security.WebSecurityConfig;
import com.webproject.webapi.service.BidService;
import com.webproject.webapi.service.ItemService;
import com.webproject.webapi.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.*;

@Slf4j
@RequiredArgsConstructor
@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final UserService userService;
    private final ItemService itemService;
    private final BidService bidService;
    private final PasswordEncoder passwordEncoder;


    @Override
    public void run(String... args) {
        if (!userService.getUsers().isEmpty()) {
            return;
        }
        USERS.forEach(user -> {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userService.saveUser(user);
        });

        log.info("Database initialized");
    }

    private static final List<User> USERS = Arrays.asList(
            new User("admin", "admin", "Admin", "admin@mycompany.com", WebSecurityConfig.ADMIN),
            new User("user", "user", "User", "user@mycompany.com", WebSecurityConfig.USER)
    );


}
