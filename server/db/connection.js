const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('DB connected');
}).catch(()=>{
    console.log('DB connection failed');
})