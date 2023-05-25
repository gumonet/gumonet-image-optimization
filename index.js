

const ORIGINALS = "./originals/multiple/";
const IMAGES    = "./images/";
const formats   = [
	//jpeg
	//{ width: 640, format:"jpg", suffix: "-small" },
	//{ width: 768, format:"jpg", suffix: "-medium" },
	{ width: 1024, format:"jpg", suffix: "" },

	//webp
	/*{ width: 640, format:"webp", suffix: "-small" },
	{ width: 768, format:"webp", suffix: "-medium" },
	{ width: 1024, format:"webp", suffix: "-large" },

	//avif
	{ width: 640, format:"avif", suffix: "-small" },
	{ width: 768, format:"avif", suffix: "-medium" },
	{ width: 1024, format:"avif", suffix: "-large" },*/
];

fs.rmdirSync( IMAGES, { recursive: true });
if( !fs.existsSync( IMAGES )){
	fs.mkdirSync(IMAGES);
}
/*Read the originals pictures*/
fs.readdirSync( ORIGINALS ).forEach( (file) => {
	//console.log( file );
	const isImageFile = /\.(jpe?g|png|avif)$/i.test(file); //Validate image format

	if( isImageFile ){
		//console.log( "is image")
		formats.map(({ width, format, suffix })=> {
			const filename = file.split(".").slice(0,-1).join("."); //get file extension
			sharp( `${ORIGINALS}${file}`)
				.resize( width )
				.toFile( `${IMAGES}${filename}${suffix}.${format}`, () =>
					console.log( `${IMAGES}${filename}${suffix}.${format}`)
				);
		});
	} else {

	}
});