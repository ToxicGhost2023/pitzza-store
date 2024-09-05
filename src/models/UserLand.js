import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cacheExpiresAt: {
    type: Date,
    default: () => Date.now() + 10 * 365 * 24 * 60 * 60,
    index: { expires: "30d" },
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});

const UserLand = models.UserLand || model("UserLand", userSchema);
export default UserLand;
