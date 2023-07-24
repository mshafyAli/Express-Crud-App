import express from 'express'
import path from 'path'
const __dirname = path.resolve();


import apiv1Router from './apiv1/main.mjs'
import apiv2Router from './apiv2/main.mjs'


const app = express()

app.use(express.json()) //Body parser



// app.use("/api/v2",apiv2Router)
app.use(apiv1Router)
app.use(apiv2Router)


// pseudoCode
// app.use((res, req, next){
//   if(token == 'valid'){
//     next();
//   }else{
//     res.send(message);
//   }
// })




app.use(express.static(path.join(__dirname, 'public')))


const port = process.env.PORT || 3001




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


