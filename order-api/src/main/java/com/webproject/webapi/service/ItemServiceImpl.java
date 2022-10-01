package com.webproject.webapi.service;

import com.webproject.webapi.model.Item;
import com.webproject.webapi.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    @Override
    public Item saveItem(Item item) { return itemRepository.save(item); }
    @Override
    public Item getItemByName(String name) { return itemRepository.findItemByName(name); }

    @Override
    public Item getItemById(String id) { return itemRepository.findItemById(id); }

    @Override
    public List<Item> getItems() { return itemRepository.findAll(); }

    @Override
    public List<Item> getItemsContainingText(String text) { return itemRepository.findByIdContainingOrDescriptionContainingOrderByStarted(text, text); }

    @Override
    public List<Item> searchAuctionItems(String text, Double currentlyLow, Double currentlyHigh) {
        return itemRepository.findByCategoryContainingOrDescriptionContainingOrCurrentlyBetweenOrderByStarted(text, text, currentlyLow, currentlyHigh);
    }

    @Override
    public Item getItemByBidId(String bidId) {
        return itemRepository.findItemByBid(bidId);
    }

    @Override
    public int updateItemCurrently(Double newBid, String itemId) {
        return itemRepository.updateCurrentlyById(newBid, itemId);
    }

    @Override
    public void deleteItem(String id) {
        itemRepository.deleteById(id);
    }
}
