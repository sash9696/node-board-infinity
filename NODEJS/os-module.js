const os = require('os');


//information about current user

const currentUser = os.userInfo();
console.log(currentUser)

//method that tells the system uptime in secs

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()

}

console.log('currentOS: ', currentOS)

