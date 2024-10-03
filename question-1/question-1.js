function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        //check if parameter is an array
        if (Array.isArray(mixedArray)) {
            const filteredArray = mixedArray
                // filter the array to only get strings
                .filter(x => typeof x === 'string')  
                // conver all strings left to lowercase
                .map(string => string.toLowerCase());         
            resolve(filteredArray);
            
        } else {
            reject('Enter an array.');
        }
    });
}

//Provided input
const filteredArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(filteredArray)
    .then(filteredArray => console.log(filteredArray))  
    .catch(error => console.error(error));
//Expected ouput should be ['pizza', 'wings'], seen on terminal