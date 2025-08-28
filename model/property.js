const { Schema, model } = require("mongoose");

// Example: Property listing schema
const propertySchema = new Schema({
  type: String,
  bhk: String,
  bathrooms: String,
  furnishing: String,
  status: String,
  listedBy: String,
  superBuiltup: Number,
  carpetArea: Number,
  maintenance: Number,
  parking: String,
  projName: String,
  description: String,
  price: Number,
  location: Object,
  photos: [String],
}, { timestamps: true });

const Property = model("Property", propertySchema);


module.exports = Property;
