var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middleware



app.get('/', function(req, res) {
    res.render('index', {title: 'Hello!'});
});

// クライアントからの接続を待つ
io.on('connection', function(socket){
    console.log('a user connected');


    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    // クライアントからメッセージを受け取ったら投げ返す
    socket.on('chat message', function(msg){
        // 同じクライアントに送信する場合は socket.emit を io.emit に変える
        socket.emit('chat message', msg);
    });
});

var port = process.env.PORT || 5000;
http.listen(port, function() {
      console.log("Listening on " + port);
});
