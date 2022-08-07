import mongoose from "mongoose";

const Connection = async (username,password)=> {

    const URL = `mongodb+srv://abhay:${password}@chatapp.qlgwp.mongodb.net/?retryWrites=true&w=majority`
     
    // We will Use try and catch method as Mongo db is external community on cloud
    // So have to check whether any error occured while connecting or not

    try{
        // useUnifiedTopology Tells MongoDb to use new servers instead of old ones
        // useNewUrlParser tells mongoDb to to use new url parser instead of old one
        // useFindAndModify tells mongodb that we will use new find and update methods


       await mongoose.connect(URL , { useUnifiedTopology: true, useNewUrlParser: true });
       console.log("Database Connected SuccesFully");
    }catch(error){
        console.log("Error While Connecting to Mongo DB", error);
    }

}

export default Connection;