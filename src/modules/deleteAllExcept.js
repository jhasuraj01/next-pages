const fs = require('fs').promises

export default async (except = []) => {
    const objects = await fs.readdir('./');

    for (const object of objects) {
        const stat = await fs.stat(object);
        if (except.includes(object) === false) {
            if (stat.isDirectory()) {
                await fs.rmdir(object)
            }
            else {
                await fs.rm(object)
            }
        }
    }
}