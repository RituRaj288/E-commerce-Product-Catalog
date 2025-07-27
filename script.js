const products = [
  {
    name: "T-Shirt",
    price: 499,
    description: "Comfortable cotton T-shirt",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Jeans",
    price: 999,
    description: "Stylish blue jeans",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Sneakers",
    price: 1499,
    description: "Trendy sneakers",
    image: "https://via.placeholder.com/150"
  }
];

const catalog = document.getElementById("catalog");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <span>₹${product.price}</span>
  `;
  catalog.appendChild(div);
});
