package com.webproject.webapi.service;

import com.webproject.webapi.model.Item;

import java.util.List;

public interface ItemService {
    Item saveItem(Item item);
    Item getItemByName(String name);
    Item getItemById(Long id);
    List<Item> getItems();
    List<Item> getItemsContainingTextZ(String text);

}
