package org.orderService.controllers;

import org.orderService.models.Order;
import org.orderService.models.OrderItem;
import org.orderService.repositories.OrderRepository;
import org.orderService.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/orders")
    public List<Order> getOrders(){
        return orderService.getOrders();
    }


}
