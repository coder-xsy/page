'use strict'
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var url = require("url");

var req_content = '';

var server = http.createServer(function (request, response) {
    console.log(request.url);
    console.log(request.method);
    //console.log(url.parse(request.url));
    var url_ob = url.parse(request.url);
    console.log(url_ob);


    if (request.method == 'GET') {
        switch (request.url) {
            case '/':
                response.writeHead(200, { 'Content-Type': 'text/html' });
                fs.createReadStream('page.html').pipe(response);
                break;

            case '/favicon.ico':
                break;

            default:
                switch (request.url.slice(-3)) {
                    case 'png':
                        response.writeHead(200, { 'Content-Type': 'image/png' });
                        break;
                    case 'jpg':
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        break;
                    case "mp3":
                        response.writeHead(200, { "Content-Type": "audio/mp3" });
                        break;
                    case "css":
                        response.writeHead("200", { "Content-Type": "text/css" });
                        break;
                    default:
                        break;
                }
                //response.writeHead(200, { 'Content-Type': 'text/html' });
                fs.createReadStream('./' + request.url).pipe(response);  //readable流数据读取完毕之后end时间触发，自动关闭writeab流
                break;
        }
    } else if (request.method == 'POST') {
        var inf;
        request.on('data', function (data) {
            req_content += data;
        });
        request.on('end', function () {
            inf = querystring.parse(req_content);
            console.log(inf);
        });

        switch (url_ob.pathname) {
            case "/register":
                fs.readFile("./static/account.json", "utf-8", function (err, data) {
                    if (err) {
                        console.log("read  account.json err");
                        response.writeHead(200, { "Content-Type": "application/json" });
                        response.end('{"reg_status":0}')  ;    //  注册失败
                    } else {
                        if (JSON.parse(data).indexOf(inf.account) == -1) {
                            fs.readFile("./static/inf.json", "utf-8", function (err, data) {
                                if (err) {
                                    console.log("read inf.json err");
                                } else {
                                    var infArr=JSON.parse(data);
                                    console.log(infArr);
                                    infArr.push(inf);
                                    
                                    fs.writeFile("./static/inf.json", JSON.stringify(infArr), function (err) {
                                        if (err) {
                                            console.log("write new account err");
                                        } else {
                                            console.log("add new account ok");
                                        }
                                    });
                                }
                            });
                            var accountArr=JSON.parse(data);
                            console.log(accountArr);
                            accountArr.push(inf.account);

                            fs.writeFile("./static/account.json", JSON.stringify(accountArr), function (err) {
                                if (err) {
                                    console.log("add account.json err");
                                } else {
                                    console.log("add account.json ok");
                                }
                            });
                            response.writeHead(200, { "Content-Type": "application/json" });
                            response.end('{"reg_status":1}') ;  //注册成功
                        } else {
                            console.log("account has been register");
                            response.writeHead(200, { "Content-Type": "application/json" });
                            response.end('{"reg_status":2}') ;   //注册时 account 已经存在
                        }
                    }
                });
                break;
            case "/login":
                fs.readFile("./static/account.json","utf-8",function(err,data){
                    var account_index=JSON.parse(data).indexOf(inf.account);
                    if(account_index==-1){
                        response.writeHead(200, { "Content-Type": "application/json" });
                        response.end('{"login_status":0}');      //登录失败
                    }else{
                        fs.readFile("./static/inf.json","utf-8",function(err,data){
                            if(JSON.parse(data)[account_index].password==inf.password){
                                response.writeHead(200, { "Content-Type": "application/json" });
                                response.end('{"login_status":1}'); //登录成功
                            }else{
                                response.writeHead(200, { "Content-Type": "application/json" });
                                response.end('{"login_status":0}') //登录失败
                            }
                        });
                    }
                });
                break;

            default:
                response.writeHead(200, { "Content-Type": "application/json" });
                response.end('{"coder":"xiongshiyuan"}');
                break;
    }



        console.log('the post data:');
        console.log(request);
    }



});
server.listen(8080);
console.log('server runing');