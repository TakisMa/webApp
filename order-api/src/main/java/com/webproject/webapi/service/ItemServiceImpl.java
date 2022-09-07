package com.webproject.webapi.service;

import com.webproject.webapi.model.Item;
import com.webproject.webapi.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    @Override
    public Item saveItem(Item item) { return itemRepository.save(item); }
    @Override
    public Item getItemByName(String name) { return itemRepository.getItemByName(name); }

    @Override
    public Item getItemById(Long id) { return itemRepository.getItemById(id); }
}
