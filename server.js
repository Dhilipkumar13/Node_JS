const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async() => {
        
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','test.txt'),'utf8')
        console.log(data)
        
        await fsPromises.writeFile(path.join(__dirname,'files','study.txt'),'hgdsf yug reyasfv s')
        console.log('write completed')

        await fsPromises.appendFile(path.join(__dirname,'files','study.txt'),'\n \n rahul thank you')
        console.log('appended completed')

        await fsPromises.rename(path.join(__dirname,'files','study.txt'),path.join(__dirname,'files','Height.txt'))
        console.log('rename completed')}

        //to delete file "await fsPromises.unlink(path.join(__dirname,'files','test.txt'))"
    catch(err){
        console.error(err)
    }
}

fileOps()