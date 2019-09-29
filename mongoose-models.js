const mongoose = require("mongoose");
const { connection, Schema } = mongoose;
mongoose.connect("mongodb://localhost:27017/text").catch(console.error);
const express = require("express");
const app = express();
const PersonSchema = new Schema({
  firstName: String,
  lastName: String,
  age: { type: Number, min: 10, max: 50, require: false },
  isSingle: Boolean
});

const Person = mongoose.model("Person", PersonSchema);

const newPerson = (firstName, lastName) =>
  new Person({
    firstName,
    lastName
  }).save();

const rPerson = id => Person.findById(id);
const killPerson = id => Person.deleteOne({ id });

app.listen(1337, () => console.log("Web Server Running on port 1337"));
