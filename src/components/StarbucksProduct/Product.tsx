import { Menu } from "@/lib/menuItems";
import ProductContent from "./Productcontent";
interface Product {
  name: string;
  sizes?: Size[];
  // Add other properties as needed
}

interface Size {
  size: string;
  price: string;
  calories: number;
  // Add other properties as needed
}

const SelectedProduct: React.FC<{ productName: string }> = ({
  productName,
}) => {
  if (!Menu || Menu.length === 0) {
    return <div>Loading menu...</div>; // Handle if Menu is empty or undefined
  }

  const foundProduct: Product | undefined = Menu.flatMap((category) =>
    category.items.flatMap((item) =>
      item.subItems ? item.subItems.flatMap((subItem) => subItem.products) : []
    )
  ).find((product) => product.name.toLowerCase() === productName.toLowerCase());

  if (!foundProduct) {
    return <div>No product named {productName} found</div>;
  }

  return (
    <div className="w-full text-left flex flex-col gap-3">
      {/* {foundProduct.sizes ? (
        foundProduct.sizes.map((size: Size, index: number) => (
          <div key={index}>
            <p>
              {size.size}: {size.price}
            </p>
            <p>Calories: {size.calories}</p>
          </div>
        ))
      ) : (
        <p>No size information available</p>
      )} */}
      <ProductContent subItem={foundProduct} />
    </div>
  );
};

export default SelectedProduct;
