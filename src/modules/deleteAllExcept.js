const fs = require('fs').promises
const exec = require('@actions/exec');

module.exports = async (except = []) => {
    const objects = await fs.readdir('./');

    for (const object of objects) {
        if (except.includes(object) === false) {
           exec.exec(`rm ${object} -r`)
        }
    }
}