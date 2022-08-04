const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const { main } = require('./config/mongodb')
const router = require('./routes/index')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use('/public',express.static('public')); 
app.set('view engine', 'ejs')


// route
app.use(router)

// error
app.use(function (err, req, res, next) {
    console.log(err)
    res.sendStatus(500).json({
        status: fail,
        errors: err.massage
    })
})


main()
.then(()=>{
    app.listen(port, function () {
        console.log(`server is running in port: ${port}`)
    })
})
.catch((err)=>{
    console.log(err)
})

