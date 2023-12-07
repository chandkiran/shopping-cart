let shop=document.getElementById("shop");
console.log(shop);

let generateShop=()=>{
return (shop.innerHTML=`
<div class="items">
<img width="197" src="images/img-1.jpg" alt="no images">
<div class="details">
    <h3>casual tshirt</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident saepe quasi harum! Voluptates, illum ipsam. Maiores, explicabo accusamus maxime, accusantium quia voluptatibus aspernatur provident libero debitis laboriosam iusto quaerat ex!</p>
    <div class="price-quantity">
        <h2>$44</h2>
   
    <div class="buttons">
        <i class="bi bi-dash"></i>
        <div class="quantity">0</div>
        <i class="bi bi-plus"></i>
    </div>
    </div>
</div>

   
</div> `)

};

generateShop();