
const toDo_List=require("../model.js");

module.exports.getAll=((req,res)=>{
    toDo_List.find().then((result=>{
       res.send(result);
    }))
})  

module.exports.deleteOne=(async(req,res)=>{
    const id=req.params.id;
    await toDo_List.deleteOne({_id:id})
    res.status(200).send('done');
})

module.exports.AddOne=(async(req,res)=>{
    const newOne=new toDo_List(req.body);
    const list= await newOne.save();
    console.log(list);
    res.status(200).json(list);
})
