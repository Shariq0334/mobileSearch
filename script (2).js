var mobiles = {
  iphone: {
    5: {
      name: "IPhone 5",
      colour: "Black",
      price: 10000,
      url: "http://www.pricematch.pk/uploadedstuff/productimages/42Apple-iPhone-5.jpg",
    },
    7: {
      name: "IPhone 7",
      colour: "Grey",
      price: 12000,
      url: "https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg",
    },
    8: {
      name: "IPhone 8",
      colour: "White",
      price: 15000,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46SAC9KUn-OrQJmuj_iayCg9gSpGlF7MPVg&usqp=CAU",
    },
    10: {
      name: "IPhone X",
      colour: "Black",
      price: 100000,
      url: "https://www.gizmochina.com/wp-content/uploads/2017/09/iPhone-X-Profile-Page-550x550.jpg",
    },
  },
  samsung: {
    glaxyyz: {
      name: "Samsung Glaxy Z fold",
      colour: "Golder",
      price: 2699999,
      url: "https://propakistani.pk/price/wp-content/uploads/2020/07/samsung-galaxy-z-fold-2.png",
    },
    s10: {
      name: "Samsung S10",
      colour: "Black",
      price: 40000,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLyMK--MujkGp9V8_GzYUwq2dQqbu05mNQQ&usqp=CAU",
    },
    note: {
      name: "Samsung Galaxy Note 10",
      colour: "Black",
      price: 50000,
      url: "https://www.gizmochina.com/wp-content/uploads/2019/07/Samsung-Galaxy-Note-10-Plus-1-500x500.jpg",
    },
    note11: {
      name: "Samsung Galaxy Note 11",
      colour: "Black",
      price: 60000,
      url: "https://hamariweb.com/mobiles/LargeImages/5049_01.jpg",
    },


  },
  oppo: {
    f10: {
      name: "OPPPO F10",
      colour: "Black",
      price: 35000,
      url: "https://www.shoppingum.com/static/store/products/buhatala/ffaedab56b2e36f59a159f55a792697e.jpg",
    },
    f9: {
      name: "OPPPO F9",
      colour: "Black",
      price: 30000,
      url: "https://phoneaqua.com/products/Oppo-F9-price-.webp",
    },
    f17: {
      name: "OPPPO F17",
      colour: "Black",
      price: 80000,
      url: "https://alfamall.b-cdn.net/pub/media/catalog/product/cache/1a89dbb01e019c7ecb20ce1cadff1320/o/p/oppo_f17_pro_3.jpg",
    },
    fpro: {
      name: "OPPPO F7 Pro",
      colour: "Black",
      price: 90000,
      url: "https://i.gadgets360cdn.com/products/large/oppo-f17-pro-574x800-1599056571.jpg",
    },

  },
};



// for (key in mobiles) {
//   console.log(mobiles[key]);
//   for (key1 in mobiles[key]) {
//     console.log(mobiles[key][key1].name);
//   }
// }

function update() {
  str = "";
  for (key in mobiles) {
    for (key1 in mobiles[key]) {
      str =
        str +
        `  <div class="my-2 mx-2 card" style="width: 18rem;">
        <img width="150px" height="300px" src="${mobiles[key][key1].url}" class="card-img-top" alt="...">
        <div id="aa" class="card-body">
          <h4 class="card-title mobileName">${mobiles[key][key1].name}</h4>
          <h4 class="card-text">${mobiles[key][key1].colour}</h4>
          <h3 class="card-text">Price : ${mobiles[key][key1].price}</h3>
          
        </div>
      </div>`;
    }
  }
  document.getElementById("notess").innerHTML = str;
}
update();

function nothingFound() {
  str = "";

  str =
    str +
    `  <div >
        <img width="1000%" height="100%" src="https://i.stack.imgur.com/6M513.png" class="card-img-top" alt="...">
     
      </div>`;



  document.getElementById("notess").innerHTML = str;

}



var search = document.getElementById("searchTxt")
// console.log(search)
// console.log(input.value)

search.addEventListener("click", function (e,) {
  event.preventDefault();
  var brandInput = document.getElementById("brandInput").value.toLowerCase()
  var modelInput = document.getElementById("modelInput").value.toLowerCase()
  
  
  if (!brandInput || !modelInput) {
    
    nothingFound()
  }else {
    document.getElementById("notess").innerHTML = 
     `<div class="my-2 mx-2 card" style="width: 18rem;">
    <img width="150px" height="300px" src="${mobiles[brandInput][modelInput].url}" class="card-img-top" alt="...">
    <div id="aa" class="card-body">
      <h4 class="card-title mobileName">${mobiles[brandInput][modelInput].name}</h4>
      <h4 class="card-text">${mobiles[brandInput][modelInput].colour}</h4>
      <h3 class="card-text">Price : ${mobiles[brandInput][modelInput].price}</h3>
      
    </div>
  </div>`

  }
})

