package com.webproject.webapi.service;

import com.webproject.webapi.model.Item;

public interface ItemService {
    Item saveItem(Item item);
    Item getItemByName(String name);
    Item getItemById(Long id);
}
