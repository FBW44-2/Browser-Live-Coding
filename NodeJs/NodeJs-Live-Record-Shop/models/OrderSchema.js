const mongoose = require("mongoose");
const { Schema } = mongoose;
/* const UserModel = require("./UserSchema") */
const OrderSchema = new Schema({
  quantity: {
    type: Number,
    required: true
  },
  record: {
    type: String,
    required: true
  }/* ,
  user:{type:String, required:true} */
});

/* OrderSchema.virtual("deliveryAddress").get(async function(){
    let user= await UserModel.findById(this.user)
    return user.address;
})
 */


module.exports = mongoose.model("orders", OrderSchema);