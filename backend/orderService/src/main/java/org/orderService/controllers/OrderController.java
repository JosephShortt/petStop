package org.orderService.controllers;

import org.orderService.models.Order;
import org.orderService.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/orders")
    public String createOrder(@RequestBody Order order){
        orderRepository.save(order);
        return "Order created Successfully";
    }
}
