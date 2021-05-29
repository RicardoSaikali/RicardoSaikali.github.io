	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Orange (Organic!) - $1.00",
		nutFree: true,
		lactoseFree: true,
		price: 1.00,
		organic: true,
		img: "images/orange.jpg"
	},
	{
		name: "Brocoli (Organic!) - $1.99",
		nutFree: true,
		lactoseFree: true,
		price: 1.99,
		organic: true,
		img: "images/brocoli.jpg"
	},
	{
		name: "Bread - $2.35",
		nutFree: false,
		lactoseFree: false,
		price: 2.35,
		organic: false,
		img: "images/bread.jpg"
	},
	{
		name: "Yogurt (Organic!)- $4.00",
		nutFree: true,
		lactoseFree: false,
		price: 4.00,
		organic: true,
		img: "images/yogurt.jpg"
	},
	{	
		name: "Almond granola - $4.00",
		nutFree: false,
		lactoseFree: true,
		price: 4.00,
		organic: false,
		img: "images/almond.jpg"
	},
	{
		name: "Eggs (Organic!)- $5.00",
		nutFree: true,
		lactoseFree: true,
		price: 5.00,
		organic: true,
		img: "images/eggs.jpg"
	},
	{
		name: "Carrots - $7.00",
		nutFree: true,
		lactoseFree: true,
		price: 7.00,
		organic: false,
		img: "images/carrots.jpg"
	},
	{
		name: "Rice - $8.00",
		nutFree: true,
		lactoseFree: true,
		price: 8.00,
		organic: false,
		img: "images/rice.jpg"
	},
	{
		name: "Salmon (Organic!)- $10.00",
		nutFree: true,
		lactoseFree: true,
		price: 10.00,
		organic: true,
		img: "images/salmon.jpg"
	},
	{
		name: "Steak (Organic!)- $16.00",
		nutFree: true,
		lactoseFree: true,
		price: 16.00,
		organic: true,
		img: "images/steak.jpg"
	},	
	{
		name: "Cake - $25.00",
		nutFree: false,
		lactoseFree: false,
		price: 25.00,
		organic: false,
		img: "images/cake.jpg"
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
function restrictListProducts(prods, restriction) {
	let product_names = [];
	if(restriction["none"]==true) {
		for (let i=0; i<prods.length; i+=1) {
			product_names.push(prods[i]);
		}
	} else {
		for (let i=0; i<prods.length; i+=1) {
			var toAdd = true;
			if (restriction["nutFree"]==true && prods[i]["nutFree"]!=true){
				toAdd = false;		
			}
			if (restriction["lactoseFree"]==true && prods[i]["lactoseFree"]!=true){
				toAdd = false;		
			}
			if (restriction["organic"]==true && prods[i]["organic"]!=true){
				toAdd = false;		
			}
			if(toAdd==true){
				product_names.push(prods[i]);
			}
		}	
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}