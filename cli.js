#!/usr/bin/env node
import yargs from "yargs";
import {hideBin} from "yargs/helpers";


const argv = yargs(hideBin(process.argv)).argv;

import processImage from "./modules/process-image.js";

processImage.compress(argv.filename, 1000, 'jpeg', );
