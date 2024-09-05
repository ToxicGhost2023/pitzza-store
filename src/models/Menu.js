import { Schema, model, models } from "mongoose";

const menuSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["american", "italiy", "drink", "food"],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "UserLand",
  },
});

const Menu = models.Menu || model("Menu", menuSchema);
export default Menu;
