/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

const Jimp = require('jimp')
const path = require('path')

/*
-----------------------------------------------------------------------------------
|
| Process images
|
-----------------------------------------------------------------------------------
*/

const PATH = path.join(__dirname, 'original-media')

const run = async path => {
  try {
    const origImage = await Jimp.read(path)
    const image = await origImage.clone()
    await image.resize(250, Jimp.AUTO).write('lena-small-bw.jpg')
  } catch (err) {
    console.log(err)
  }
}

run(`${PATH}/about_me.png`)
