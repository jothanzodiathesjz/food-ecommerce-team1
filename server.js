const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use('/public',express.static('public')); 
app.set('view engine', 'ejs')
app.listen(port, function () {
    console.log(`server is running in port: ${port}`)
})

// error
app.use(function (err, req, res, next) {
    console.log(err)
    res.sendStatus(500).json({
        status: fail,
        errors: err.massage
    })
})

