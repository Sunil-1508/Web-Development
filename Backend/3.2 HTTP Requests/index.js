import ep from "express"

const app=ep()

const port=3000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello World !!!</h1>")
    //console.log(req.rawHeaders)
})


app.get('/about',(req,res)=>{
    res.send("<h1>This is About page.</h1>")
   
})



app.listen(port,()=>{
    console.log(`Server is running in port ${port}.`)
})

