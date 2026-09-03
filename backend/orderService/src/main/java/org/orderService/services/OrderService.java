package org.orderService.services;

import org.orderService.models.Order;
import org.orderService.models.OrderItem;
import org.orderService.models.Product;
import org.orderService.repositories.OrderRepository;
import org.orderService.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.NumberFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    public Order createOrder(Order order){
        order.setTimeStamp(LocalDateTime.now());
        for (OrderItem item : order.getItems()){
            item.setOrder(order);
            Product fullProduct = productRepository.findById(item.getProduct().getProductId())
                    .orElseThrow(() -> new RuntimeException("No product found"));
            item.setProduct(fullProduct);
        }

        return orderRepository.save(order);

    }

    public List<Order> getOrders(){
        return orderRepository.findAll();
    }

    public String printOrderDetails(Order order){
        Long id = order.getOrderNumber();
        String name = order.getFirstName()+" "+order.getSurname();
        String address = order.getAddress();
        List<OrderItem> items = order.getItems();
        NumberFormat formatter = NumberFormat.getCurrencyInstance();

        String out = "Order Number: "+id
                +"\nName: "+name
                +"\nAddress: "+address
                +"\nItems: "+ Arrays.toString(items.toArray())
                +"\nOrder Total Cost: "+ formatter.format(getTotalCost(items));

        return out;
    }

    public double getTotalCost(List<OrderItem> items){
        double total=0;
        for(OrderItem item : items){
            total+=item.getProduct().getCost()*item.getQuantity();
        }
        return total;
    }
}
