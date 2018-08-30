import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Issue = new Schema({
   title: {
       type: String
   },
   owner: {
       type: String
   },
   description: {
        type: String    
   },
   priority: {
       type: String
   },
   status: {
       type: String,
       default: 'Open'
   }
});

export default mongoose.model('Issue', Issue);