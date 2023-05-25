//const sharp = require("sharp");
//const fs    = require("fs");
import sharp from "sharp";
import * as fs from 'fs';



const processImage = (function(){
        
    function compress( imagePath, width, format ){
        const isImageFile = /\.(jpe?g|png|avif)$/i.test(imagePath); //Validate image format

         if( isImageFile ){
             const filename = imagePath.split(".").slice(0,-1).join("."); //get file extension

             sharp( `${imagePath}`)
                 .resize( width )
                 .toFile( `${filename}.${format}`, () =>
                     console.log( `${filename}.${format}`)
                 );   
         } else {
            console.log(" Image no valid!")
         }
    }

    return {
        compress
    }

});

export default processImage();