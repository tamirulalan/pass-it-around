const express =require('express')

let app =express()
app.get('/0', (req,res)=>{
    res.send('<h1> Sorry!! There is no more drink left. Start over again </h1>')
})
app.get('/:numberOfBottles', (req,res)=>{
    if(req.params.numberOfBottles >=2 && req.params.numberOfBottles<=99){
         res.send(req.params.numberOfBottles + " Bottles of beer on the wall, <a href = '" + (req.params.numberOfBottles-1)+ "'>take one down, pass it around</a>")
    } else if (req.params.numberOfBottles=1){
        res.send(req.params.numberOfBottles + " Bottles of beer on the wall, <a href = '" + (req.params.numberOfBottles-1)+ "'>take it down,and enjoy</a>")
    }
   
})
app.listen(3000,()=>{
console.log('Started listening to port 3000')
})