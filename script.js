let productId = 1;

function addProduct(){

  let productName = document.getElementById("productName").value;
  let category = document.getElementById("category").value;
  let price = document.getElementById("price").value;

  if(productName === "" || category === "" || price === ""){
    alert("Please fill all fields");
    return;
  }

  let table = document.getElementById("productTable");

  let row = table.insertRow();

  row.insertCell(0).innerHTML = productId;
  row.insertCell(1).innerHTML = productName;
  row.insertCell(2).innerHTML = category;
  row.insertCell(3).innerHTML = "₹" + price;

  row.insertCell(4).innerHTML =
  `<button class="delete-btn" onclick="deleteProduct(this)">Delete</button>`;

  productId++;

  document.getElementById("productName").value = "";
  document.getElementById("category").value = "";
  document.getElementById("price").value = "";
}

function deleteProduct(button){
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}