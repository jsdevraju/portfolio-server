import mongoose from 'mongoose';
import app from './app.js';
import { config } from 'dotenv'

config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log(`Db Connected`)
})

app.listen(process.env.PORT || 5000, () =>{
    console.log(`Server Listing Port: ${process.env.PORT || 5000}`)
})