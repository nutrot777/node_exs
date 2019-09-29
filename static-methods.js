const mongoose = require('mongoose')
const {connection, Schema}=mongoose
mongoose.connect(
    'mongodb://localhost:27017/test'
).catch(console.error)

const UsrSchm = new Schema({
    firstName:String,
    lastName: String,
    likes:[String],
})

UsrSchm.static('getByFullName', function getByFullName(v){
    const fullName
})