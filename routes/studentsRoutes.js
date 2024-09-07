const express = require('express');
const router = express.Router();    
const Student = require('../models/students.js');
const student = require('../models/students.js');


router.post('/', async (req, res) => {
    try {
        const newStudentData = req.body;
        const newStudent = new Student(newStudentData);
    // Save the new person to the database using await
        const savedStudent = await newStudent.save();
        console.log('Saved Student to database');
        res.status(201).json(savedStudent);
    } catch (error) {
        console.error('Error saving Student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    });

router.get('/', async (req, res) =>{
    try {
        const students = await Student.find();
        console.log('get all student data');
        res.status(200).json(students);
    } catch (error) {
        console.log(error, 'Error saving new person');
        res.status(500).json({error: 'Internal server error'});
        }
    });

router.get('/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const response = await Student.findById(studentId);

        if (!response) {
        return res.status(404).json({ error: 'Student not found' });
        }

        console.log('get single student data');
        res.status(200).json(response);

    } catch (error) {
        console.log(error, 'Error saving new person');
        res.status(500).json({error: 'Internal server error'});
    }
  });

router.put('/:id', async (req, res) => {
    try {
        const studentId = req.params.id; 
        const updatedStudentData = req.body; 
    
        const response = await Student.findByIdAndUpdate(studentId, updatedStudentData, { 
        runValidators: true, // Run Mongoose validation
    });
  
        if (!response) {
        return res.status(404).json({ error: 'Student not found'});
    }

        console.log('Student ID updated successfully');
        res.status(200).json(response);
  
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
  }
  });

router.delete('/:id', async (req, res) => {
    try {
      const studentId = req.params.id;
      const response = await Student.findByIdAndDelete(studentId);

      if (!response) {
        return res.status(404).json({ error: 'Student not found' });
      }

      console.log('Student deleted successfully');
      res.status(200).json(response);

    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })

module.exports = router;
