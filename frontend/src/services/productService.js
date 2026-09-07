import products from "../data/products";

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === Number(id));

      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 300);
  });
};
