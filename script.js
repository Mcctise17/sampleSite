/*target.innerHTML = "window"
document.body.innerHTML += "treasure"
var element = document.createElement ("button");
element.innerHTML = "New"
document.body.appendChild(element);*/
let store = [
  {
    id : 1,
    name : "Toothpaste",
    price : 500
  },
  {
    id : 2,
    name : "Asprin",
    price : 1000
  } 
];
let cart = [];
function updateCart(){
  document.getElementById("quantity").innerHTML = cart.length;
}
function addToCart(item){
  cart.push(item);
  updateCart();
  console.log(cart);
} 
function Product(item){
  return `
  <div class="product">
  <img src = "https://www.google.com/url?sa=i&url=http%3A%2F%2Fblog.vandalog.com%2F2011%2F04%2Fdon%25E2%2580%2599t-look-a-dark-horse-in-the-mouth-%25E2%2580%2593-an-interview-with-sweet-toof%2F%3Futm_source%3Dfeedburner%26utm_medium%3Demail%26utm_campaign%3DFeed%253A%2BVandalog%2B(Vandalog)&psig=AOvVaw3tFGqCueJNcu_oT96ijSNU&ust=1626901032097000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDY8eLE8vECFQAAAAAdAAAAABAF">
  <div class = "text">
     <div class = "name">${item.name}</div> 
     <div class = "price">${item.price}</div>
  </div>
  <button onClick = "addToCart({id : ${item.id},name : '${item.name}',price : ${item.price}})"> + </button>
  </div>`
}
for(let i = 0; i < store.length; i++){
  document.body.innerHTML += Product(store[i]);
}