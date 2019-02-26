import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let trip = new Schema({
  trip_name:{
    type: String
  },
  comments: [{ name: String, description: String, latitude: String, longitude: String }],
});

export default mongoose.model('Issue', Issue)
