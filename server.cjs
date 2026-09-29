const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const port=Number(process.env.PORT||4174);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
http.createServer((req,res)=>{
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}
 const file=path.resolve(__dirname,'.'+(pathname==='/'?'/index.html':pathname));
 if(!file.startsWith(__dirname+path.sep)||pathname.split('/').some(part=>part.startsWith('.'))){res.writeHead(403).end();return;}
 fs.readFile(file,(err,data)=>{if(err){res.writeHead(404).end('Not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);});
}).listen(port,'127.0.0.1',()=>console.log('WeCover preview: http://127.0.0.1:'+port));

