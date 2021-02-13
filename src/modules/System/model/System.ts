import {Schema, model} from 'mongoose';

const schema = new Schema({
    balance:{
        type: Number,
        required:true
    }
})

export default model('System',schema)