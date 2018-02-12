const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
var multer  = require('multer')
var upload = multer({dest: 'uploads/'})

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static((__dirname,'public')));

app.post('/api/filesize',upload.single('file'),(req,res)=>{
  return res.json({"size":req.file.size});
});

app.listen(process.env.PORT || 5000,()=>{
  console.log('server listening');
});
