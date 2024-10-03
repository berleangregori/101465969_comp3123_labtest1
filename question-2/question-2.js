const resolvedPromise = () => {
    return new Promise((resolve) => {
        // set to resolve message after 500ms
        setTimeout(() => {
            resolve({'message': 'delayed success!'});
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        // set to show reject error message after 500ms
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
};

//call promises
resolvedPromise()
    .then(success => console.log(success))  
    .catch(error => console.error(error));
//expected output: delayed success!

rejectedPromise()
    .then(success => console.log(success))
    .catch(error => console.error(error.message)); 
//expected output: delayed exception! 
