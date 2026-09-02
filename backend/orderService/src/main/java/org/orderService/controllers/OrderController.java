package org.orderService.controllers;

import org.orderService.models.Order;
import org.orderService.models.OrderItem;
import org.orderService.repositories.OrderRepository;
import org.orderService.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/orders")
    public String createOrder(@RequestBody Order order){
        Order saved = orderService.createOrder(order);

        return orderService.printOrderDetails(saved);
    }


}
