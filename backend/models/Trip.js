import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Trip = new Schema({
  trip_name:String,
  locations: [String]
  //locations: [{ name: String, lat: String, long: String, desc: String, img: String }],
});

export default mongoose.model('Trip', Trip)
