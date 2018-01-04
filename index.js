//requires
var request = require("request");
var cheerio = require("cheerio");
var async  = require("async");

// //making request
// request("http://www.visitseattle.org/",function(error,response,data){
// 	// console.log(data);
// 	var $ = cheerio.load(data);
// 	// console.log($(".text-medium-small").text());
// 	var neighborhoods = $(".text-medium-small").map(function(index,element){
// 		return {
// 			name: $(element).text(),
// 			link: $(element).closest("a").attr("href")
// 		}
// 	}).get();
// 	console.log(neighborhoods);
// });


// function fn1(callback) {
// 	console.log(1);
// 	request("http://www.google.com/",function (error,res,data) {
// 		callback(null,data);	
// 	})
// }

// function fn2(callback) {
// 	console.log(2);
// 	callback(null,"second");
// }

// function fn3(callback) {
// 	console.log(3);
// 	callback(null,"third");
// }

// async.series([fn1,fn2,fn3],function (err,results) {
// 	console.log("DONE");
// 	console.log(results);
// })

// function fn1(callback) {
// 	console.log("RAN FUNCTION 1");
// 	setTimeout(function(){
// 		console.log("first function");
// 		callback(null,"1");
// 	},5000)
// }
// function fn2(callback) {
// 	console.log("RAN FUNCTION 2");
// 	setTimeout(function(){
// 		console.log("second function");
// 		callback(null,"1");
// 	},1000)
// }
// function fn3(callback) {
// 	console.log("RAN FUNCTION 3");
// 	setTimeout(function(){
// 		console.log("third function");
// 		callback(null,"3");
// 	},15000)
// }

// async.parallel([fn1,fn2,fn3],function(err,results){
// 	console.log("DONE");
// 	console.log(results);
// });

// function fn1(callback){
// 	var initial = 55;
// 	callback(null, initial);
// }

// function fn2(num1,callback){
// 	num1 += 5;
// 	callback(null,num1);
// }

// function fn3(num1,callback){
// 	num1 += 40;
// 	callback(null,num1);
// }

// async.waterfall([fn1,fn2,fn3],function(error,results){
// 	console.log("DONE");
// 	console.log(results);
// });

var urlsToGet = ["https://www.reddit.com/search.json?=politics",
				"https://www.reddit.com/search.json?=kittens",
				"https://www.reddit.com/search.json?=programminghumor"];

var getFirstTitle = function(url,callback){
	request(url,function(error,response,data){
		var getFirstTitle = JSON.parse(data).data.children[0].data.title;
		callback(null,firstTitle);
	});
}

async.concat(urlsToGet,getFirstTitle,function(error,results){
	console.log(results);
});