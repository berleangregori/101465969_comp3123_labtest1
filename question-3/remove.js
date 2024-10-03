//Node.js modules
const fs = require('fs');
const path = require('path');

// ref Logs directory
const logsDirectory = path.join(__dirname, 'Logs');

// Check if Logs directory exists
if (fs.existsSync(logsDirectory)) {
    // read all files in directory
    fs.readdirSync(logsDirectory).forEach(file => {
        const filePath = path.join(logsDirectory, file);
        console.log(`delete files...${file}`);
        // remove files
        fs.unlinkSync(filePath);
    });

    // remove directory
    fs.rmdirSync(logsDirectory);
} else {
    console.log('Directory does not exist');
}
