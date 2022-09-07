package com.webproject.webapi.service;


import com.webproject.webapi.model.Bid;
import org.springframework.stereotype.Service;

@Service
public interface BidService {
    Bid saveBid(Bid bid);
    Double getAmount(Long id);

}
