package com.webproject.webapi.service;

import com.webproject.webapi.model.Item;

import java.util.List;

public interface ItemService {
    Item saveItem(Item item);
    Item getItemByName(String name);
    Item getItemById(String id);
    List<Item> getItems();
    List<Item> getItemsContainingText(String text);
    List<Item> searchAuctionItems(String text, Double currentlyLow, Double currentlyHigh);
    Item getItemByBidId(String bidId);
    int updateItemCurrently(Double newBid, String itemId);
    void deleteItem(String id);
}
