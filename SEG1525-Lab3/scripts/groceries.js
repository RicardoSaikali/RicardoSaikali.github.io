	
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
		// https://www.istockphoto.com/photo/orange-gm185284489-19875146
	},
	{
		name: "Brocoli (Organic!) - $1.99",
		nutFree: true,
		lactoseFree: true,
		price: 1.99,
		organic: true,
		img: "images/brocoli.jpg"
		// https://lamoisson.com/produit/brocoli-bio/
	},
	{
		name: "Bread - $2.35",
		nutFree: false,
		lactoseFree: false,
		price: 2.35,
		organic: false,
		img: "images/bread.jpg"
		// https://www.cookingclassy.com/homemade-bread/
	},
	{
		name: "Yogurt (Organic!)- $4.00",
		nutFree: true,
		lactoseFree: false,
		price: 4.00,
		organic: true,
		img: "images/yogurt.jpg"
		// https://www.cabotcheese.coop/greek-yogurt-substitutions/
	},
	{	
		name: "Almond granola - $4.00",
		nutFree: false,
		lactoseFree: true,
		price: 4.00,
		organic: false,
		img: "images/almond.jpg"
		// https://www.nourishedtheblog.com/honey-almond-granola/
	},
	{
		name: "Eggs (Organic!)- $5.00",
		nutFree: true,
		lactoseFree: true,
		price: 5.00,
		organic: true,
		img: "images/eggs.jpg"
		// https://www.heart.org/en/news/2018/08/15/are-eggs-good-for-you-or-not
	},
	{
		name: "Carrots - $7.00",
		nutFree: true,
		lactoseFree: true,
		price: 7.00,
		organic: false,
		img: "images/carrots.jpg"
		// https://thehealthybutcher.com/organic-carrots-2-lb.-bag.html
	},
	{
		name: "Rice - $8.00",
		nutFree: true,
		lactoseFree: true,
		price: 8.00,
		organic: false,
		img: "images/rice.jpg"
		// https://www.flickr.com/photos/ajay_suresh/49906485468
	},
	{
		name: "Salmon (Organic!)- $10.00",
		nutFree: true,
		lactoseFree: true,
		price: 10.00,
		organic: true,
		img: "images/salmon.jpg"
		// https://www.walmart.ca/en/ip/your-fresh-market-atlantic-salmon-fillets/6000191273561
	},
	{
		name: "Steak (Organic!)- $16.00",
		nutFree: true,
		lactoseFree: true,
		price: 16.00,
		organic: true,
		img: "images/steak.jpg"
		// https://www.mentalfloss.com/article/23246/should-you-really-put-steak-shiner
	},	
	{
		name: "Cake - $25.00",
		nutFree: false,
		lactoseFree: false,
		price: 25.00,
		organic: false,
		img: "images/cake.jpg"
		// https://handletheheat.com/best-birthday-cake/
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