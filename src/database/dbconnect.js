const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://fidele_noteapp:fidelenoteapp24@cluster0.odqyi.mongodb.net/noteschemas?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("MongoDB connect"))
.catch(()=>console.log("Error for MongoDB connection"))