const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let rolesValidos = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} invalid role",
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "si es bien necesario el nombre"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "si es bien necesario el correos"],
  },
  password: {
    type: String,
    required: [true, "si es bien necesario el contrasena"],
  },
  img: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "USER_ROLE",
    enum: rolesValidos,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

usuarioSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

usuarioSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

module.exports = mongoose.model("Usuario", usuarioSchema);
