import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
//schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Require"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, " Email is Require"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "password is require"],
      minlength: [6, "Password length should be greater than 6 character"],
    },
    location: {
      type: String,
      default: "India",
    },
  },
  { timestamps: true }
);
// middelwares
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
export default mongoose.model("User", userSchema);
