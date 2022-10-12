const mongoose = require("mongoose");

const schema = mongoose.Schema;

const contactSchema = new schema({
  name: { type: String },
  designation: { type: String },
  company: { type: String },
  industry: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  country: { type: String },
  
});

const contactsSchema = new schema({
  contacts:{type: Array(contactSchema)},

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});


const Contacts = mongoose.model("Contacts", contactsSchema);
module.exports = Contacts;