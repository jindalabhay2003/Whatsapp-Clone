import User from '../model/User.js';

export const addUser = async (request, response) => {

    try {

        let exist = await User.findOne({ googleId: request.body.googleId });

        if (exist) {
            response.status(200).json("user already exist");
            return;
        }

        const newuser = new User(request.body);

        await newuser.save();
        response.status(200).json("User Saved Successfully");
    }
    catch (error) {
        response.status(500).json(error);
    }
};

export const getUsers = async (request,response)=>{

    try{
        const users = await User.find({});

        response.status(200).json(users);
    }catch(error){

        response.status(500).json(error);
    }
}