const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    pic: {
      type: String,
      default:
        "https://images.assetsdelivery.com/compings_v2/salamatik/salamatik1801/salamatik180100019.jpg",
    },
  },
  {
    timestamps: true
  }
);

userSchema.methods.matchPassword=async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword,this.password);
}

userSchema.pre('save',async function (next){
    if(!this.isModified){
      next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);

  })

const User = mongoose.model("User", userSchema);

module.exports = User;
//you can also use this for avatar for anonymus person
//https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg