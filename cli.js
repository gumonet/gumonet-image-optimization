#!/usr/bin/env node
import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import processImage from "./modules/process-image.js";

const argv = yargs(hideBin(process.argv)).argv;

let output = '';
let size = 1000;
let format = 'jpeg'


if( argv.out ) {
    output = `${argv.out}/`;
}
if( argv.size ) {
    size = argv.size;
}
if( argv.format ) {
    format = argv.format;
}

processImage.compress(argv.filename, size, format, output );
