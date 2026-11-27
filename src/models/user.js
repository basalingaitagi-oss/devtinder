
const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require("validator");

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true,
        minLength:4,
        maxLength:20
    },
    lastname:{
        type:String
    },
    gender:{
         type:String,
         validate(value){
            if(!["male","female"].includes(value)){
                throw new Error("Gender is not valid")
            }
         }
    },
    age:{
         type:Number,
         min:18,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid");
            }
        }
    },
    password:{
        type:String
    },
    photoUrl:{
        type:String,
        default:"https://pngtree.com/so/user-profile-avatar"
    },
    about:{
         type:String,
         default:"This is default about user"
    },
    skills:{
        type:[String]
    }
},{ timestamps: true });


module.exports = mongoose.model('User',userSchema);
