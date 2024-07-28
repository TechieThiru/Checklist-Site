const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
    name: String,
    q1_yes: Boolean,
    q1_no: Boolean,
    q1_na: Boolean,
    q2_yes: Boolean,
    q2_no: Boolean,
    q2_na: Boolean,
    q3_yes: Boolean,
    q3_no: Boolean,
    q3_na: Boolean,
    q4_yes: Boolean,
    q4_no: Boolean,
    q4_na: Boolean,
    q5_yes: Boolean,
    q5_no: Boolean,
    q5_na: Boolean,
    q6_yes: Boolean,
    q6_no: Boolean,
    q6_na: Boolean,
    q7_yes: Boolean,
    q7_no: Boolean,
    q7_na: Boolean,
    q8_yes: Boolean,
    q8_no: Boolean,
    q8_na: Boolean,
    q9_yes: Boolean,
    q9_no: Boolean,
    q9_na: Boolean,
    q10_yes: Boolean,
    q10_no: Boolean,
    q10_na: Boolean,
    q11_yes: Boolean,
    q11_no: Boolean,
    q11_na: Boolean,
    q12_yes: Boolean,
    q12_no: Boolean,
    q12_na: Boolean,
    q13_yes: Boolean,
    q13_no: Boolean,
    q13_na: Boolean,
    q14_yes: Boolean,
    q14_no: Boolean,
    q14_na: Boolean,

}, { timestamps: true });

const Checklist = mongoose.model('Checklist', checklistSchema);

router.post('/', async (req, res) => {
    const checklist = new Checklist(req.body);
    await checklist.save();
    res.status(201).send(checklist);
});

router.get('/', async (req, res) => {
    const checklists = await Checklist.find();
    res.send(checklists);
});

router.get('/:id', async (req, res) => {
    const checklist = await Checklist.findById(req.params.id);
    res.send(checklist);
});

router.put('/:id', async (req, res) => {
    const checklist = await Checklist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(checklist);
});

module.exports = router;
