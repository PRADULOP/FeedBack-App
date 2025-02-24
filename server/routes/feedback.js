const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');


router.get('/', async (req, res) => {
  try{
    const feedbacks = await Feedback.find();
    res.send(feedbacks);
  }catch(error){
    res.status(500).send({message:"Data not found"})
  }
  
});


router.post('/add', async (req, res) => {
  try{
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).send({message:"Feedback added successfully"})
  }catch(error){
    res.status(500).send({message:"Feedback not added"})
  }
});


router.put('/update/:id', async (req, res) => {
  try{
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send({message:"Feedback updated successfully"})
    }catch(error){[
        console.log(error) 
    ]}
});


router.delete('/delete/:id', async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.status(200).send({message:"Feedback deleted successfully"})
});

module.exports = router;
