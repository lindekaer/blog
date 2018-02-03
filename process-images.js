/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

const Jimp = require('jimp')
const path = require('path')
const util = require('util')
const fs = require('fs')
const readdir = util.promisify(fs.readdir)

/*
-----------------------------------------------------------------------------------
|
| Process images
|
-----------------------------------------------------------------------------------
*/

const SRC_PATH = path.join(__dirname, 'original-media')
const DIST_PATH = path.join(__dirname, 'static')

const run = async () => {
  try {
    const directories = (await readdir(SRC_PATH)).filter(x => x[0] !== '.')
    for (let directory of directories) {
      const filesPath = path.join(SRC_PATH, directory)
      const files = await readdir(filesPath)
      for (let filename of files) {
        const filePath = path.join(filesPath, filename)
        const distPath = path.join(DIST_PATH, directory, filename)
        const origImage = await Jimp.read(filePath)
        const image = await origImage.clone()
        await image
          .quality(100)
          .resize(800, Jimp.AUTO)
          .write(distPath)
      }
    }
  } catch (err) {
    console.log(err)
  }
}

run()
