//Node.js modules
const fs = require('fs');
const path = require('path');

// ref Logs directory
const logsDirectory = path.join(__dirname, 'Logs');

// Check if the directory already exists, if not create it using Node.js methods
if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);;
}

// Change directory to Logs 
process.chdir(logsDirectory);

// Using a for loop, create 10 files 
for (let i = 0; i <= 9; i++) {
    const logFile = `log${i}.txt`;
    //create file every loop
    fs.writeFileSync(logFile, `log #${i}`);
    console.log(logFile);
}
