package org.orderService.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    @Enumerated(EnumType.STRING)
    private ProductCategory productCategory;
    private double cost;

    public Product(ProductCategory productCategory,double cost){
        this.productCategory =productCategory;
        this.cost=cost;
    }


}
