const base64 = require('node-base64-image');
// import { appendFile } from 'node:fs/promises';
const fsProsmises = require('node:fs/promises');
const urls = require('./urls');

const photoFolder = './photo';

function getImageInfoByUrl(url) {
  if(typeof url === 'string') {
    //Assume url follow partern: https://bpsvietnam.vn/media/product/xxx.jpg
    let lastSlashIndex = url.lastIndexOf('/');
    let lastDotIndex = url.lastIndexOf('.');
    let image_name = url.slice((lastSlashIndex), (lastDotIndex - 1));
    let image_extension = url.slice(lastDotIndex);
    return {
      image_name,
      image_extension
    }
  }else {
    throw new Error('[FAILED] getImageInfoByUrl: url is not string');
  }
}

async function main() {
  for(let i=0; i<urls.length; i++) {
    let url = urls[i];
    let {image_name, image_extension} = getImageInfoByUrl(url);
    const image = await base64.encode(url);
    const path = photoFolder + image_name + image_extension;
    await fsProsmises.appendFile(path, image);
    console.log(`[Success] Downloaded image: ${path}`);
  }
}

main();
