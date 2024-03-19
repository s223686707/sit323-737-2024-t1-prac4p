// Import required modules
const express = require('express');
const logger = require('./logger'); // Importing logger module

const app = express();

//  Middleware to parse JSON requests
app.use(express.json());

// Addition Endpoint
app.post('/add', (req, res) => {
    const {num1, num2} = req.body;
    if(isNaN(num1) || isNaN(num2)){
        logger.error('Invalid Numbers Provided');
        return res.status(400).json({error: "Invalid Numbers Provided" });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    logger.info(`Addition: ${num1} + ${num2} = ${result}`);
    res.json({result});
});

// Subtraction Endpoint
app.post('/subtract', (req, res) => {
    const {num1, num2} = req.body;
    if(isNaN(num1) || isNaN(num2)){
        logger.error('Invalid Numbers Provided');
        return res.status(400).json({error: "Invalid Numbers Provided" });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    logger.info(`Subtraction: ${num1} - ${num2} = ${result}`);
    res.json({result});
});

// Multiplication Endpoint
app.post('/multiply', (req, res) => {
    const {num1, num2} = req.body;
    if(isNaN(num1) || isNaN(num2)){
        logger.error('Invalid Numbers Provided');
        return res.status(400).json({error: "Invalid Numbers Provided" });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    logger.info(`Multiplication: ${num1} * ${num2} = ${result}`);
    res.json({result});
});

// Division Endpoint
app.post('/divide', (req, res) => {
    const {num1, num2} = req.body;
    if(isNaN(num1) || isNaN(num2)){
        logger.error('Invalid Numbers Provided');
        return res.status(400).json({error: "Invalid Numbers Provided" });
    }
    if(parseFloat(num2) === 0){
        logger.error('Cannot divide by zero');
        return res.status(400).json({error: "Cannot divide by zero" });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    logger.info(`Division: ${num1} / ${num2} = ${result}`);
    res.json({result});
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});