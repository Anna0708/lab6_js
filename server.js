const http = require('http');

const html = `<!doctype>
		<html>
			<head>
				<meta charset = "utf-8">
				<title>Сервер NodeJs</title>
				<link rel ="stylesheet" href= "app.css">
			</head>

			<body>
				<h1>Server on NodeJS</h1>
				<button>Enter on me</button>
			</body>
		</html>`
		;
const css =`
body{
	margin:0;
	padding:0;
	text-align:center;
}
h1{
	background-color: purple;
	color: white;
	padding: 150px;
	font-family: "Consolas";
	font-size:55px;
}`
;

http.createServer((req,res) => {
	switch(req.url){
		case '/':
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(html);

		case '/app.css':
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.end(css);

		default:
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.end('404 Not Found');

	}
	
}).listen(443, () => console.log('Server Work'));


