const mongoose = require("mongoose");

const FurnitureSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  size: {
    type: String,
    trim: true,
  },
  colour: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  availableQuantity: {
    type: String,
    trim: true,
  },
});

const FurnitureModel = mongoose.model("FurnitureData", FurnitureSchema);
module.exports = {
  FurnitureModel,
};
