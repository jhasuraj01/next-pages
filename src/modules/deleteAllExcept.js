const fs = require('fs').promises
const exec = require('@actions/exec');

module.exports = async (except = []) => {
    const objects = await fs.readdir('./');

    console.log(JSON.stringify(objects, null, 4))

    for (const object of objects) {
        if (except.includes(object) === false) {
           exec.exec(`rm ${object} -r`)
        }
    }
}