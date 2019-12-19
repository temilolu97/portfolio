const express = require('express');
const path = require('path')
const app = express();

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static(path.join(__dirname,"public")));
app.use('/css',express.static(path.join(__dirname,'public/css')));
app.use('/js', express.static(path.join(__dirname,'public/js')))
app.use('/img', express.static(path.join(__dirname,'public/image')))
app.get('/',(req,res)=>{
    res.render('index',
        {
            title:'Temi Ojo',
            nav:[
                {link:'#home',title:'Home'},
                {link:'#about',title:'About'},
                {link:'#resume',title:'Resume'},
            ]
        }
    )
})


const port = process.env.PORT || 3000;
app.listen(port ,()=>{
    console.log(`App is now listening on port ${port}`);
})

module.exports = app;