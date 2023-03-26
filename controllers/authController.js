import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    //validate
    if (!name) {
      next("name is required");
    }
    if (!email) {
      next("email is required");
    }
    if (!password) {
      next("password is required and greater than 6 character");
    }
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      next("Email Already Register Please Login");
    }
    const user = await userModel.create({ name, email, password });
    res.status(201).send({
      sucess: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
