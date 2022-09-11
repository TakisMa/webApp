package com.webproject.webapi.service;

import com.webproject.webapi.model.Item;

import java.util.List;

public interface ItemService {
    Item saveItem(Item item);
    Item getItemByName(String name);
    Item getItemById(String id);
    List<Item> getItems();
    List<Item> getItemsContainingText(String text);

}
