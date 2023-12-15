const { default: mongoose } = require("mongoose");

const TODO_Schema=new mongoose.Schema({
    Description:{
        type:String,
       // require:true
    }
})

module.exports=mongoose.model("TODO_LIST",TODO_Schema);