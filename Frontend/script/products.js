

        
         
         
        
         

       
    

let  cart  = JSON.parse(localStorage.getItem("shopcartdata")) || [];
let  wishListData  = JSON.parse(localStorage.getItem("shopwishlist")) || [];

let displaycartcount = document.getElementById("cartcount");
let displaywishcount = document.getElementById("wishcount");

let productArr=[];
let allArr = [
  {
    "hallName": "Grand Celebration Hall",
    "hallDescription": "A spacious hall perfect for grand celebrations. Elegant decor and modern amenities.",
    "hallCapacity": 200,
    "hallPrice": 5000,
    "hallCategory": "Marriage",
    "hallCity": "Mumbai",
    "hallPhoto": "https://cdn0.weddingwire.in/vendor/3279/3_2/960/jpg/file-1644992170035_15_233279-164499217148673.webp"
  },
  {
    "hallName": "Royal Banquet Hall",
    "hallDescription": "Experience royal treatment in our exquisite banquet hall. Ideal for weddings and receptions.",
    "hallCapacity": 150,
    "hallPrice": 4500,
    "hallCategory": "Birthday",
    "hallCity": "Delhi",
    "hallPhoto": "https://selectvenue.in/blog/wp-content/uploads/2022/10/1-840x473.jpg"
  },
  {
    "hallName": "Grand Celebration Hall",
    "hallDescription": "A spacious hall perfect for grand celebrations. Elegant decor and modern amenities.",
    "hallCapacity": 200,
    "hallPrice": 5000,
    "hallCategory": "Marriage",
    "hallCity": "Mumbai",
    "hallPhoto": "https://cdn0.weddingwire.in/vendor/3279/3_2/960/jpg/file-1644992170035_15_233279-164499217148673.webp"
  },
  {
    "hallName": "Royal Banquet Hall",
    "hallDescription": "Experience royal treatment in our exquisite banquet hall. Ideal for weddings and receptions.",
    "hallCapacity": 150,
    "hallPrice": 4500,
    "hallCategory": "Birthday",
    "hallCity": "Delhi",
    "hallPhoto": "https://selectvenue.in/blog/wp-content/uploads/2022/10/1-840x473.jpg"
  },
  {
    "hallName": "Grand Celebration Hall",
    "hallDescription": "A spacious hall perfect for grand celebrations. Elegant decor and modern amenities.",
    "hallCapacity": 200,
    "hallPrice": 5000,
    "hallCategory": "Marriage",
    "hallCity": "Mumbai",
    "hallPhoto": "https://cdn0.weddingwire.in/vendor/3279/3_2/960/jpg/file-1644992170035_15_233279-164499217148673.webp"
  },
  {
    "hallName": "Royal Banquet Hall",
    "hallDescription": "Experience royal treatment in our exquisite banquet hall. Ideal for weddings and receptions.",
    "hallCapacity": 150,
    "hallPrice": 4500,
    "hallCategory": "Birthday",
    "hallCity": "Delhi",
    "hallPhoto": "https://selectvenue.in/blog/wp-content/uploads/2022/10/1-840x473.jpg"
  }, {
    "hallName": "Grand Celebration Hall",
    "hallDescription": "A spacious hall perfect for grand celebrations. Elegant decor and modern amenities.",
    "hallCapacity": 200,
    "hallPrice": 5000,
    "hallCategory": "Marriage",
    "hallCity": "Mumbai",
    "hallPhoto": "https://cdn0.weddingwire.in/vendor/3279/3_2/960/jpg/file-1644992170035_15_233279-164499217148673.webp"
  },
  {
    "hallName": "Royal Banquet Hall",
    "hallDescription": "Experience royal treatment in our exquisite banquet hall. Ideal for weddings and receptions.",
    "hallCapacity": 150,
    "hallPrice": 4500,
    "hallCategory": "Birthday",
    "hallCity": "Delhi",
    "hallPhoto": "https://selectvenue.in/blog/wp-content/uploads/2022/10/1-840x473.jpg"
  },
  {
    "hallName": "Grand Celebration Hall",
    "hallDescription": "A spacious hall perfect for grand celebrations. Elegant decor and modern amenities.",
    "hallCapacity": 200,
    "hallPrice": 5000,
    "hallCategory": "Marriage",
    "hallCity": "Mumbai",
    "hallPhoto": "https://cdn0.weddingwire.in/vendor/3279/3_2/960/jpg/file-1644992170035_15_233279-164499217148673.webp"
  },
  {
    "hallName": "Royal Banquet Hall",
    "hallDescription": "Experience royal treatment in our exquisite banquet hall. Ideal for weddings and receptions.",
    "hallCapacity": 150,
    "hallPrice": 4500,
    "hallCategory": "Birthday",
    "hallCity": "Delhi",
    "hallPhoto": "https://selectvenue.in/blog/wp-content/uploads/2022/10/1-840x473.jpg"
  },
  {
    "hallName": "Grand Celebration Hall",
    "hallDescription": "A spacious hall perfect for grand celebrations. Elegant decor and modern amenities.",
    "hallCapacity": 200,
    "hallPrice": 5000,
    "hallCategory": "Marriage",
    "hallCity": "Mumbai",
    "hallPhoto": "https://cdn0.weddingwire.in/vendor/3279/3_2/960/jpg/file-1644992170035_15_233279-164499217148673.webp"
  },
  {
    "hallName": "Royal Banquet Hall",
    "hallDescription": "Experience royal treatment in our exquisite banquet hall. Ideal for weddings and receptions.",
    "hallCapacity": 150,
    "hallPrice": 4500,
    "hallCategory": "Birthday",
    "hallCity": "Delhi",
    "hallPhoto": "https://selectvenue.in/blog/wp-content/uploads/2022/10/1-840x473.jpg"
  },
  {
    "hallName": "Grand Celebration Hall",
    "hallDescription": "A spacious hall perfect for grand celebrations. Elegant decor and modern amenities.",
    "hallCapacity": 200,
    "hallPrice": 5000,
    "hallCategory": "Marriage",
    "hallCity": "Mumbai",
    "hallPhoto": "https://cdn0.weddingwire.in/vendor/3279/3_2/960/jpg/file-1644992170035_15_233279-164499217148673.webp"
  },
  {
    "hallName": "Royal Banquet Hall",
    "hallDescription": "Experience royal treatment in our exquisite banquet hall. Ideal for weddings and receptions.",
    "hallCapacity": 150,
    "hallPrice": 4500,
    "hallCategory": "Birthday",
    "hallCity": "Delhi",
    "hallPhoto": "https://selectvenue.in/blog/wp-content/uploads/2022/10/1-840x473.jpg"
  },
  {
    "hallName": "Grand Celebration Hall",
    "hallDescription": "A spacious hall perfect for grand celebrations. Elegant decor and modern amenities.",
    "hallCapacity": 200,
    "hallPrice": 5000,
    "hallCategory": "Marriage",
    "hallCity": "Mumbai",
    "hallPhoto": "https://cdn0.weddingwire.in/vendor/3279/3_2/960/jpg/file-1644992170035_15_233279-164499217148673.webp"
  },
  {
    "hallName": "Royal Banquet Hall",
    "hallDescription": "Experience royal treatment in our exquisite banquet hall. Ideal for weddings and receptions.",
    "hallCapacity": 150,
    "hallPrice": 4500,
    "hallCategory": "Birthday",
    "hallCity": "Delhi",
    "hallPhoto": "https://selectvenue.in/blog/wp-content/uploads/2022/10/1-840x473.jpg"
  }

  
]
function displayData(all) {
  document.querySelector("#container").innerHTML = "";
  all.forEach(function (el) {
    let div = document.createElement("div");

    let div1 = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", el.hallPhoto);
    let div2 = document.createElement("div");

    let title = document.createElement("h3");
    title.textContent = el.hallName;

    let desc = document.createElement("p");
    desc.textContent = el.hallDescription;

    let cate = document.createElement("p");
    cate.textContent = "Category: "+ el.hallCategory;

    let capacity = document.createElement("p");
    capacity.textContent = "Capacity: " + el.hallCapacity;


    let city = document.createElement("p");
    city.textContent = "City: " + el.hallCity;

    let price = document.createElement("p");
    price.textContent = "Price: ₹" + el.hallPrice;
    
    let button = document.createElement("button")
    button.textContent = "BOOK NOW"

    div1.append(image);
    div2.append(title, desc,cate,capacity, city, price,button);
    div.append(div1, div2);

    document.querySelector("#container").append(div);
  });
}

// Initial display of data
displayData(allArr);

// Other functions (search, sorting, filtering) should use `allArr` instead of `productArr`
// ...

// Example event listener for sorting price
let sorted = document.querySelector("#sort");

sorted.addEventListener("change", function (event) {
  let val = document.querySelector("#sort").value;

  if (val == "LTH") {
    let data1 = allArr.sort(function (a, b) {
      return a.hallPrice - b.hallPrice;
    });

    displayData(data1);
  } else if (val == "HTL") {
    let sorteddata = allArr.sort(function (a, b) {
      return b.hallPrice - a.hallPrice;
    });

    displayData(sorteddata);
  } else {
    displayData(allArr);
  }
});
function filterByCategory(category) {
  if (category === "All") {
    // If the category is "All", display all halls
    displayData(allArr);
  } else {
    // Filter halls based on the selected category
    const filteredHalls = allArr.filter(function (hall) {
      return hall.hallCategory.toLowerCase() === category.toLowerCase();
    });

    // Display the filtered data
    displayData(filteredHalls);
  }
}

// Event listener for the "filter" select element
document.getElementById("filter").addEventListener("change", function (event) {
  // Get the selected category value
  const selectedCategory = event.target.value;
  console.log(selectedCategory)

  // Call the filter function with the selected category
  filterByCategory(selectedCategory);
});
function search() {
  // Get the input value from the search box
  const searchTerm = document.querySelector('input[type="search"]').value.toLowerCase();

  // Filter halls based on the entered city
  const filteredHalls = allArr.filter(function (hall) {
    return hall.hallCity.toLowerCase().includes(searchTerm);
  });

  // Display the filtered data
  displayData(filteredHalls);
}


// Initial display of all halls
displayData(allArr);







