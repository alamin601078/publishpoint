import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogsSchema = new Schema<IBlog>({
    title: { type:String , require:true},
    content:{ type:String , require: true},
    author: {type:Schema.Types.ObjectId,require:true},
    isPublished:{type:Boolean,require:true}
},{
    timestamps: true
})



const blogs = model<IBlog>('blogs',blogsSchema)
export default blogs
