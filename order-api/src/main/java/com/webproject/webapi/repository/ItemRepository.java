package com.webproject.webapi.repository;

import com.webproject.webapi.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, String> {

    Item findItemByName(String name);
    Item findItemById(String id);
    List<Item> findByIdContainingOrDescriptionContainingOrderByStarted(String id, String description);
    Item findItemByBid(String bid_id);

    @Transactional
    @Modifying
    @Query("update Item item set item.currently = ?1 where item.id = ?2")
    int updateCurrentlyById(Double newBid, String itemId);
}
