// var http = require( 'http' )
// var url = require( 'url' )
// http.createServer(function(req,res){
//     var q = url.parse(req.url, true).query;
//     var text = q.year + " " + q.month ;
    // res.write(req.url)
    // res.end();
    // res.end(text)
// }).listen(8080, ()=>{
//     console.log('Our server is running on port 8080')
// })

// var readMe = fs.readFileSync('readMe.txt','utf8')
// console.log(readMe)
//===============Async==============
// fs.readFile('readMe.txt','utf8' ,function(err,data){
//     if (err)throw err;
//     console.log(data)
// })
// console.log('test')

// fs.writeFileSync('writeMe.txt','you just created me');
// console.log('test')
//===============Async==============
// fs.writeFile('writeMeTwo.txt','its a async readed file',()=>{
//     console.log('file created succesfully')
// })
// console.log('test')
//=================Syns Dir=======================
// fs.unlinkSync('writeMe.txt')
// fs.mkdirSync('Items')
//===================Async Dir=============================
// fs.mkdir('Students',(err)=>{
//     if(err) throw err;
//     fs.readFile('readMe.txt','utf8',(err,data)=>{
//         if(err) throw err
//         fs.writeFile('./Students/student',data,()=>{
//             console.log('Student created sucessfuly ')
//         })
//     })
// })
// fs.rmdirSync('Pics')
// fs.unlink('./Students/student',()=>{
//     fs.rmdir('Students',()=>{
//         console.log('Dir removed')
//     })
// })

// fs.appendFile('readMe.txt','im appended data',(err)=>{
//     if(err)throw err
//     console.log(' data appended sucessfully ');
// })
// var readMe =fs.readFileSync('readMe.txt','utf8')
// console.log(readMe)

// fs.rename('readMe.txt','message.txt',()=>{
//     if(err) throw err
//     console.log('File renamed!')

// })
// var fs = require('fs');
// var http = require( 'http' )
// var url = require( 'url' )
// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-type':'text/plain'})
//     // var q = url.parse(req.url, true).query;
//     // var text = q.year + " " + q.month ;
//     // res.write(req.url)
//     res.write("Hello there")
//     res.end();
// }).listen(8080, ()=>{
//     console.log('Our server is running on port 8080')
// })

// var myReadStream = fs.createReadStream(__dirname+'/message.txt',);
// myReadStream.on('data',function(chunk){
//     console.log('New Chunk of data recived')
//     console.log(chunk);
// })

var fs=require('fs')

// var myReadStream = fs.createReadStream(__dirname+ '/message.txt','utf8');
// var myWriteStream = fs.creatWriteStream(__dirname+ '/WriteStream.txt')
// myReadStream.pipe(myWriteStream)
// myReadStream.on('data', (chunk)=>{
//     console.log('New chunk recived')
//     console.log(chunk);
//     myWriteStream.write(chunk)
// })
// var readable = fs.createReadStream('message.txt')
// var writable = fs.createWriteStream('jamshid.txt')
// readable.pipe(writable)
// console.log('File added')

// var fs = require('fs');
// var http = require( 'http' )
// var url = require( 'url' )
// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-type':'text/html'})
//     fs.readFile('index.html',(err,data)=>{
//         if(err) throw err
//         res.write(data)
//         return res.end();
//     })
    // var myReadStream = fs.createReadStream(__dirname+ '/message.txt','utf8')
    // myReadStream.pipe(res)
    // var q = url.parse(req.url, true).query;
    // var text = q.year + " " + q.month ;
    // res.write(req.url)
    // res.write("Hello there")
    // res.end();
// }).listen(8080, ()=>{
//     console.log('Our server is running on port 8080')
// })

// var fs = require('fs');
// var http = require('http')
// var url = require('url')

// http.createServer(function(req,res){
    // res.writeHead(200,{'content-type': 'Application/json'})
    // var myObjFile = fs.readFileSync('jamshid.json')
    // res.end(myObjFile)
    // var myObj = {
    //     name: 'Haseeb',
    //     job: 'Pilot',
    //     age: 20
    // }
    // res.end(JSON.stringify(myObj))

//     fs.createReadStream('./jamshid.json').pipe(res);
// }).listen(8080,()=>{
//     console.log('our server is running on port 8080')
// })



//====================Basic routing========================


var fs = require('fs');
var http = require('http')
var url = require('url')
var events = require('events')

http.createServer(function(req,res){
  console.log('request made for'+ req.url)
  if(req.url ==='/home'){
    res.writeHead(200,{'content-type': 'text/html'})
    fs.createReadStream('./index.html').pipe(res)
  }else if(req.url === '/contact'){
    res.writeHead(200,{'content-type': 'text/html'})
    fs.createReadStream('./contact.html').pipe(res)
  }else if(req.url === '/api/employe'){
    res.writeHead(200,{'content-type': 'text/html'})
    fs.createReadStream('./jamshid.json').pipe(res)
  }else{
    fs.createReadStream('404.html').pipe(res)

  }
}).listen(8080,()=>{
    console.log('Your server is running on port 8080...')
})
// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function(props){
//     console.log('the props you passed is :'+props)
// })
// myEmitter.emit('someEvent', 'some event is the emitter event')

// var Hello = require('events')
// Hello.on('hello', function(props){
//     console.log('you have said hello world:'+props)
// })
// Hello.emit('hello', 'hello world')
// var myEmitter = new Hello.EventEmitter()
// var myfunc = ()=>{
//     console.log('im the function u called')
// }

// myEmitter.on('calltheFunc', myfunc)

// myEmitter.emit('calltheFunc')

//===================Node Send Email=====================

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'hasibfarahi01@gmail.com',
        pass:'zjngldsznxbtywqd'
    }
});

var mailOptions = {
    from: 'hasibfarahi01@gmail.com',
    to: 'fayaz.nasrat10@gmail.com',
    subject: 'this is the email we send by node js',
    text: 'this is my message from node js'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }else{
        console.log('email sent sucessfully'+info.response)
    }
})