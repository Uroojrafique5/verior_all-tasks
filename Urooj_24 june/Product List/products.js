const products = ['Shoes', 'Shirt', 'Sunglasses', 'Shorts', 'Scarf', 'Sneakers', 'Sweater'];

function filterProducts() {
  const query = document.getElementById('search').value.toLowerCase();
  const filtered = products.filter(product => product.toLowerCase().includes(query));
  const list = document.getElementById('productList');
  list.innerHTML = filtered.map(p => `<li>${p}</li>`).join('');
}

filterProducts(); // initial load
