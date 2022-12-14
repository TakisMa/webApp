package com.webproject.webapi.repository;

import com.webproject.webapi.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BidRepository extends JpaRepository<Bid, String> {
    Double getAmountById(Long id);

    Bid getBidByIdOrderByAmountDesc(String id);


}
