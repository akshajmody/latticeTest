# Akshaj Mody Lattice Test 1

## Notes

### Requirements for rendering

- Chrome extension used to mock api call to provide the data
- npm i for installing all dependencies
- npm start to run application
- Please use Tweak mock API or other API interceptor and input data as the following JSON data:

```
[
   {
      "id":1,
      "category":"Sporting Goods",
      "price":"$19.99",
      "inStock":true,
      "name":"Hockey Puck",
      "imageUrl":"https://via.placeholder.com/400x400.png?text=Hockey+Puck"
   },
   {
      "id":2,
      "category":"Sporting Goods",
      "price":"$9.99",
      "inStock":true,
      "name":"Baseball",
      "imageUrl":"https://via.placeholder.com/400x400.png?text=Baseball"
   },
   {
      "id":3,
      "category":"Sporting Goods",
      "price":"$29.99",
      "inStock":false,
      "name":"Basketball",
      "imageUrl":"https://via.placeholder.com/400x400.png?text=Basketball"
   },
   {
      "id":4,
      "category":"Electronics",
      "price":"$199.99",
      "inStock":true,
      "name":"iPod Touch",
      "imageUrl":"https://via.placeholder.com/400x400.png?text=iPod+Touch"
   },
   {
      "id":5,
      "category":"Electronics",
      "price":"$399.99",
      "inStock":false,
      "name":"iPhone 6",
      "imageUrl":"https://via.placeholder.com/400x400.png?text=iPhone+5"
   },
   {
      "id":6,
      "category":"Electronics",
      "price":"$799.99",
      "inStock":true,
      "name":"Galaxy S20",
      "imageUrl":"https://via.placeholder.com/400x400.png?text=Nexus+7"
   },
   {
      "id":7,
      "category":"Electronics",
      "price":"$5999.99",
      "inStock":true,
      "name":"Mac Pro",
      "imageUrl":"https://via.placeholder.com/400x400.png?text=Mac+Pro"
   },
   {
      "id":8,
      "category":"Clothing",
      "price":"$99.99",
      "inStock":true,
      "name":"Lattice Jacket",
      "imageUrl":"https://via.placeholder.com/400x400.png?text=Lattice+Jacket"
   }
]

```

### Functionalities Completed

- Converted data to JSON
- Made API call to a mock API with data retrieved via mock API interceptor extension
- Created state to store JSON Data
- Rendered all visual components needed
- Categorized Items by product.category
- Non stocked items highlighted red
- Modal begin to be implemented for "view detail" button
- Check box begin to be implemented for in stock checker

### Functionalities Needing to be finished

- Search Function filtering
- (partial) In Stock check functionality remainder needed to be completed with change handler attached to check box
- (partial) Modal remainder just needs image to be attached to modal section that is partially complete
