package com.webproject.webapi.repository;

import com.webproject.webapi.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    Item findItemByName(String name);
    Item findItemById(Long id);
    List<Item> findByIdContainingOrDescriptionContainingOrderByStarted(String id, String description);

}
