function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);

      for (var i = 0; i <= 8; i++) {
        console.log("for");
        document.getElementById("image" + i).src = res.products[i].image;
        document.getElementById("nameProduct" + i).textContent = res.products[i].name;
        document.getElementById("description" + i).textContent = res.products[i].description;
        document.getElementById("oldPrice" + i).textContent = "De: R$" + res.products[i].oldPrice;
        document.getElementById("price" + i).textContent = "Por: R$" + res.products[i].price;
        document.getElementById("installments" + i).textContent = "ou " + res.products[i].installments.count + "x de R$" + res.products[0].installments.value;
      }
    }
  };
  xhttp.open("GET", "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1", true);
  xhttp.send();
}