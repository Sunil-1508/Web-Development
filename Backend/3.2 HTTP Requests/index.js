import ep from "express"

const app=ep()

const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello World !!!")
})

app.listen(port,()=>{
    console.log(`Server is running in port ${port}.`)
})

