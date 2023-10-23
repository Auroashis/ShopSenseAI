
var mongodb=require('mongodb').MongoClient;
var data=new Array();
mongodb.connect("mongodb+srv://auroashisdalai:Auroashis@cluster0.pa0im3k.mongodb.net/?retryWrites=true&w=majority").then((c)=>{
    console.log("connected")
    findi(c)
})
async function findi(c){
    const cursor = c.db('ShopsenseAI').collection('product').find()

        const results = await      cursor.toArray();
        if (results.length>0){
            console.log('Found ${results.length}');
            results.forEach((result,i)=>{
                data[i]=result
            });
        }
    

}
module.exports =data;