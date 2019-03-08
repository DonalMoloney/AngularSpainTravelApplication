import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Trip = new Schema({
  trip_name:{
    type: String
  },
  comments: [{ name: String, description: String, latitude: String, longitude: String }],
});

export default mongoose.model('Trip', Trip)
