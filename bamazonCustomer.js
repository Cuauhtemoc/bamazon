var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    showProducts();
})
function showProducts(){
 var query = "SELECT * FROM products"
 connection.query(query, function(err, res){
    if(err) throw err;
    // for (i = 0; i < res.length; i++){
    //     console.log("ID: " + res[i].id + "  Product: " + res[i].product_name + " Department: " + res[i].department_name + " Price: " + res[i].price + " Stock Quantity: " + res[i].stock_quantity  )
    // }
    console.table(res);
    start();
 })
};

function start(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to buy a product?",
            name: "buyConfirm"
        }
    ]).then(function(answers){
        // buyProduct();
        if (answers.buyConfirm) {
            selectProduct()
        }
        else 
        {
            connection.end();
            console.log("GoodBye"); 
        }
    });
}
function selectProduct(){
    inquirer.prompt([
        {
            type: "input",
            message: "What you like to buy? Please enter an ID",
            name: "id"
        }
    ]).then(function(answers){
        var query = "SELECT * FROM products WHERE id = ?"
        connection.query(query, [answers.id], function(err, res){
            if(res.length < 1){
                console.log("Please enter a valid ID")
                selectProduct();
            }
            else{
                console.table(res);
                buyProduct(res);
            }
    })
})};

function buyProduct(res){
    inquirer.prompt({
        type: "input",
        message: "How many would you like to buy?",
        name: "stock"
    }).then(function(answers){
        if (res[0].stock_quantity < answers.stock){
            console.log("Insufficient quantity! \n\n");
            showProducts();
        }
        else{
            var newstock = res[0].stock_quantity - answers.stock;
            var totalPrice = answers.stock * res[0].price;
            var query = "UPDATE products SET stock_quantity = ? WHERE id = ?"
            connection.query(query, [newstock, res[0].id],function(err, res){
                console.log("Thank you for you busness! Your total cost is: $" + totalPrice + "\n\n");
                showProducts();
            })
        }

    })
}


    

