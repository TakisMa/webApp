package com.webproject.webapi.service;

import com.webproject.webapi.model.Bid;
import com.webproject.webapi.repository.BidRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class BidServiceImpl implements BidService {

    private final BidRepository bidRepository;

    @Override
    public Bid saveBid(Bid bid) { return bidRepository.save(bid); }

    @Override
    public Double getAmount(Long id) {
        return bidRepository.getAmountById(id);
    }
}
