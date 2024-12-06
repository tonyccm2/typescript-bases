export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Motorola",
  price: 150,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}
export function taxCalculation(
  options: TaxCalculationOptions
): [number, number] {
  const { tax, products } = options;
  let total: number = 0;

  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax,
});

//console.log("Tax: ", taxTotal);
//console.log("Total: ", total);
