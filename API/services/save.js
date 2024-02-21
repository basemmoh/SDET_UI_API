const fs =require('fs');
const path = require('path');
function save(userData,filePath) {
    try{
        fs.writeFileSync(filePath, JSON.stringify(userData));
        console.log('Data saved successfully')
        return true;
    }
    catch(error){
        console.log(error)
        return false;
    }
}

module.exports = {
    save
};