let cart = [];


setTimeout(() => {
  showScreen('register');
}, 2000);

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}


function goToLogin() {
  let user = document.getElementById('reg-user').value ;
  let pass = document.getElementById('reg-pass').value ;
  let confirm = document.getElementById('reg-confirm').value ;

  if(user==""|| pass ==""|| confirm==""){
    alert("Please fill fields");
    return;
  }
  if(pass !== confirm){
    alert("Passwords do not match");
    return;
  }
  alert("Registration successful!");
  showScreen('login')
}

function login() {
  let user = document.getElementById('login-user').value;
  let pass = document.getElementById('login-pass').value;

  console.log(user, pass); 

  if (user === "" || pass === "") {
    alert("Enter your login details");
    return;
  }

  showScreen('products');
}

function addToCart(name, price, image) {
  cart.push({ name, price, image });
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}

function openCart() {
  showScreen('cart');
  showCart();
}

function showCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <h4>${item.name}</h4>
          <p>$${item.price}</p>
        </div>
        <button onclick="removeItem(${index})">X</button>
      </div>
    `;
  });

  document.getElementById('total').innerText = "Total: $" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  showCart();
  updateCartCount();
}

function checkout() {
  showScreen('checkout');
}


function placeOrder() {
  cart = [];
  updateCartCount();
  alert("Fill in your details");
  showScreen('success');
}