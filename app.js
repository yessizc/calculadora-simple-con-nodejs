const express = require ('express')
const app = express()
const bodyparser= require('body-parser')

app.use(bodyparser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post('/sumar', (req,res)=>{
    const n1 =Number(req.body.num1)
    const n2 =Number(req.body.num2)
    const sumar =n1+n2

    res.send("<h1> el resultado de la suma es: "+sumar+"</h1><button><a href='/'>volver</a></button>")
})

app.post('/restar', (req,res)=>{
    const n1 =Number(req.body.num1)
    const n2 =Number(req.body.num2)
    const restar =n1-n2

    res.send("<h1> el resultado de la resta es: "+restar+"</h1><button><a href='/'>volver</a></button>")
})

app.post('/multiplicar', (req,res)=>{
    const n1 =Number(req.body.num1)
    const n2 =Number(req.body.num2)
    const multiplicar =n1*n2

    res.send("<h1> el resultado de la multiplicacion es: "+multiplicar+"</h1><button><a href='/'>volver</a></button>")
})

app.post('/dividir', (req,res)=>{
    const n1 =Number(req.body.num1)
    const n2 =Number(req.body.num2)
    if(n2 != 0){
        const dividir =n1/n2
        res.send("<h1> el resultado de la divicion es: "+dividir+"</h1><button><a href='/'>volver</a></button>")
    } else {
        res.send("<h1> No se puede dividir por cero</h1><button><a href='/'>volver</a></button>")
    }
})


app.listen(9081,(err)=>{
    if (err){
        console.log('no hay conecxion')
    } else {
        console.log('conexion exitosa')
    }
})