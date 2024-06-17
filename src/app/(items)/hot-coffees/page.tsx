import React from "react";
import { Menu } from "../../../../lib/menuItems";

const HotCoffees = () => {
  // Find the "Hot Coffees" category
  const hotCoffeesCategory = Menu.find((category) => category.items.some(item => item.name === "Hot Coffees"));

  if (!hotCoffeesCategory) {
    return <div>No Hot Coffees category found</div>;
  }

  const hotCoffees = hotCoffeesCategory.items.find(item => item.name === "Hot Coffees");

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Menu</h1>
      <h2 className="font-bold text-xl mb-2">Hot Coffees</h2>
      {hotCoffees?.subItems.map((subItem, index) => (
        <div key={index}>
          <h3 className="font-semibold text-lg">{subItem.category}</h3>
          <ul>
            {subItem.products.map((product, productIndex) => (
              <li key={productIndex}>
                <h4>{product.name}</h4>
                <img src={product.image} alt={product.name} />
                <ul>
                  {/* {product.sizes.map((size, sizeIndex) => (
                    <li key={sizeIndex}>
                      {size.size} - {size.size2} - {size.calories} calories - {size.price}
                    </li>
                  ))} */}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HotCoffees;
