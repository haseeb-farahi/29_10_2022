// var mysql = require('mysql')

// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     pass: '',
//     database: 'mydb'
// });
// con.connect((err)=>{
// ===============Command for creating database========================================
//     con.query('CREATE DATABASE mydb',(err, result)=>{
//         if(err) throw err
//         console.log('Database Created Succesfully!')


    // var sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(25), address VARCHAR(200))'
    // var sql = "ALTER TABLE customers ADD COLUMN email VARCHAR(30)"
    // var sql ="INSERT INTO customers (name,address,email) VALUES ('Israil','Arzan Qimat','khandkhel@gmail.com')"
    // var sql ="INSERT INTO customers (name,address,email) VALUES ('Haseeb','Khairkhana','hasibfarahi01@gmail.com')"

        // var sql = "INSERT INTO customers (name,address,email) VALUES ?"
        // var values = [
        //     ['Wadan', 'khair khana', 'wadan@gmail.com'],
        //     ['hasib', 'khair khana', 'hasib@gmail.com'],
        //     ['shairf', 'khair khana', 'sharif@gmail.com'],
        //     ['zohaib', 'arzan qimat', 'zohaib@gmail.com'],
        //     ['hamza', 'khair khana', 'hamza@gmail.com'],
        //     ['fayaz', 'khair khana', 'fayaz@gmail.com'],

        // ]
        // con.query(sql,[values],(err,result)=>{
        //     if(err) throw err
        //     console.log('Customer Created Succesfully!')
        // })
    // });

    var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'mydb'
});
con.connect((err)=>{
    if(err) throw err
    console.log('mySQL Connected Succesfully');

    // var sql = "SELECT * FROM customers";
    // var sql = "SELECT email FROM customers"
    // var sql = "SELECT name,email FROM customers"
    // var sql = "SELECT address FROM customers"
    // var sql = "SELECT * FROM customers WHERE name LIKE 'h%'"
    var theName = 'haseeb'
    // var sql = "SELECT * FROM customers WHERE name ='israil' AND address = 'arzan qimat' "
    // var sql = "SELECT * FROM `customers` WHERE name = 'israil 'or name = 'manem' "
    // var sql = "SELECT * FROM `customers` ORDER BY id DESC"
    // var sql = "UPDATE customers SET name = 'Menam' WHERE name= 'fayaz'"
    // var sql = "DELETE FROM customers WHERE name = 'Wadan'"
    // var sql = "SELECT * FROM customers LIMIT 5"
    // var sql = "CREATE TABLE products (name VARCHAR(20))"
    var sql = "DROP TABLE products"
    // var sql = 'CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY , name VARCHAR (25),price VARCHAR (200),stock VARCHAR(20))'
    // var sql = "INSERT INTO products (name,price,stock)VALUES?"
    // var values =[
    //     ['Tv', '20000', '10']
    //     ['PC', '3000', '30']
    //     ['Desk', '1000', '13']
    //     ['Remote', '200', '30']
    //     ['Mobile', '20000', '40']
    //     ['Camera', '11000', '6']
    // ]
    var sql = "CREATE TABLE orders (id INT AUTO_INCREMENT PRIMARY KEY, order_number INT, customer_id INT,products_id INT, FOREIGN KEY (produts_id) REFERNCES products(id))"
    con.query(sql,(err,result,fields)=>{
        if(err)throw err
        console.log(result)
        // console.log('user deleted')
    })
});

    
