package org.orderService.services;

import org.orderService.models.Product;
import org.orderService.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public String getProductName(Long id){
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product ID does not exist"));

        return product.getProductCategory().toString();
    }
}
