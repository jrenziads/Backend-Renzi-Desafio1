class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.error("Ya existe un producto con el mismo código.");
            return;
        }

        const product = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado.");
        }
    }
}

const manager = new ProductManager();
manager.addProduct("Producto 1", "Descripción del producto 1", 10, "thumbnail1.jpg", "ABC123", 20);
manager.addProduct("Producto 2", "Descripción del producto 2", 15, "thumbnail2.jpg", "DEF456", 15);
manager.addProduct("Producto 3", "Descripción del producto 3", 20, "thumbnail3.jpg", "GHI789", 25);

console.log(manager.getProducts());
console.log(manager.getProductById(2));
console.log(manager.getProductById(4));
