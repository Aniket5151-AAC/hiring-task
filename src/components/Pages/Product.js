import React from 'react'

const Product1 = () => {
  return (
   <>
   <h2>I AM PRODUCT COMP</h2>
   <div class="header">
        <p id="userEmail"></p>
    </div>
    
    <div class="search-container">
        <input type="text" id="searchInput" placeholder="Search products..."/>
    </div>
    
    <div class="products-container" id="productsContainer">
      

        <div class="container">
        <h1>Food Products</h1>
        <div class="product-grid">
          
            <div class="product">
                <div class="price">$5.99</div>
                <img src="food1.jpg" alt="Food 1"/>
                <div class="product-name">Delicious Pizza</div>
                <div class="product-description">A savory pizza with fresh ingredients.</div>
            </div>
            <div class="product">
                <div class="price">$3.49</div>
                <img src="food2.jpg" alt="Food 2"/>
                <div class="product-name">Healthy Salad</div>
                <div class="product-description">A fresh and crisp salad with a variety of vegetables.</div>
            </div>
           
            <div class="product">
                <div class="price">$2.99</div>
                <img src="food3.jpg" alt="Food 3"/>
                <div class="product-name">Tasty Sandwich</div>
                <div class="product-description">A tasty sandwich with your choice of fillings.</div>
            </div>
           
            <div class="product">
                <div class="price">$4.99</div>
                <img src="food4.jpg" alt="Food 4"/>
                <div class="product-name">Yummy Burger</div>
                <div class="product-description">A juicy burger with a side of fries.</div>
            </div>
            <div class="product">
                <div class="price">$6.99</div>
                <img src="food5.jpg" alt="Food 5"/>
                <div class="product-name">Spaghetti Bolognese</div>
                <div class="product-description">Classic Italian pasta with a rich meat sauce.</div>
            </div>
           
            <div class="product">
                <div class="price">$2.49</div>
                <img src="food6.jpg" alt="Food 6"/>
                <div class="product-name">Fruit Smoothie</div>
                <div class="product-description">A refreshing smoothie made with fresh fruits.</div>
            </div>
            <div class="product">
                <div class="price">$5.49</div>
                <img src="food7.jpg" alt="Food 7"/>
                <div class="product-name">Chicken Nuggets</div>
                <div class="product-description">Crispy chicken nuggets served with dipping sauce.</div>
            </div>
            
            <div class="product">
                <div class="price">$3.99</div>
                <img src="food8.jpg" alt="Food 8"/>
                <div class="product-name">Ice Cream Sundae</div>
                <div class="product-description">A delicious sundae with your choice of toppings.</div>
            </div>
        </div>
    </div>
















    </div>
    
    <script src="script.js"></script>
   </>
  )
}

export default Product1