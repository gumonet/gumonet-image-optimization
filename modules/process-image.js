import sharp from "sharp";

const processImage = (function(){
        
    function compress( imagePath, width, format, output ){
        const isImageFile = /\.(jpe?g|png|avif)$/i.test(imagePath); //Validate image format

         if( isImageFile ){
             const filename = imagePath.split(".").slice(0,-1).join("."); //get file extension
             const outputdir   = `${output}${filename}-optimized.${format}` 
             sharp( `${imagePath}`)
                 .resize( width )
                 .toFile( outputdir, () =>
                     console.log( outputdir )
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