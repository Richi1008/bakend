class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  addProduct(product) {
    // Validar que todos los campos sean obligatorios
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.log("Todos los campos son obligatorios.");
      return;
    }

    // Validar que el campo "code" no se repita
    if (this.products.some((p) => p.code === product.code)) {
      console.log(`El producto con código ${product.code} ya existe.`);
      return;
    }

    // Agregar el producto con un id autoincrementable
    product.id = this.productIdCounter++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      console.log("Producto no encontrado.");
    }
  }
}

// Ejemplo de uso:
const productManager = new ProductManager();

productManager.addProduct({
  title: "Producto 1",
  description: "Descripción del Producto 1",
  price: 10.99,
  thumbnail: "imagen1.jpg",
  code: "P001",
  stock: 50,
});

productManager.addProduct({
  title: "Producto 2",
  description: "Descripción del Producto 2",
  price: 19.99,
  thumbnail: "imagen2.jpg",
  code: "P002",
  stock: 30,
});

const products = productManager.getProducts();
console.log(products);

const productById = productManager.getProductById(2);
console.log(productById);

const nonExistentProduct = productManager.getProductById(3); // Producto no encontrado.
