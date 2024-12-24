import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        minlength: 3,
        maxlength: 50,
      },
    email:{
        type: String,
        required: [true, 'Please provide your email'],
        trim: true,
        unique: true,
      },
    password: {type:String,require:true},
    role: {
        type: String,
        enum: {
          values: ['user', 'admin'],
          message: '{VALUE} is not valid, please provide a valid role',
        },
        default: 'user',
        required: true,
      },
    inBlocked: {
        type: String,
        enum: ['true', 'false'],
        required: true,
        default: 'false',
      }
},{
    timestamps: true
})


// userSchema.index({ email: 1 }, { unique: true });

const user = model('user',userSchema)
export default user
