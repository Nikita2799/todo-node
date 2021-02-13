import {Schema, model,Types} from 'mongoose';

const schema = new Schema({
    id:{
        type: Types.ObjectId
    },
    balance:{
        type: Number
    },
    date:{
        type:String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    count:{
        type: Number,
        required:true
    }
})

export default model('Todo',schema)