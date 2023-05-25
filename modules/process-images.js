const sharp = require("sharp");
const fs    = require("fs");
const objProcessImages =  {
	//isImageFile: /\.(jpe?g|png|avif)$/i.test(file),
	processDir: () => {
		fs.readdirSync( ORIGINALS ).forEach( (file) => {
			//console.log( file );
			const isImageFile = /\.(jpe?g|png|avif)$/i.test(file); //Validate image format

			if( isImageFile ){
				//console.log( "is image")

			} else {

			}
		});
	},
	init : async () => {
		//fs.rmdirSync( IMAGES, { recursive: true });
		if( !fs.existsSync( IMAGES )){
			fs.mkdirSync(IMAGES);
		}
		objProcessImages.processFiles();
	}
}