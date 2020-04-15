const jimp = require("jimp");

new jimp(512, 512, '#fb2928', (err, image) => {
    jimp.loadFont("font/font.fnt").then(font => {
        return image.print(font, 256, 256, "FED", 512)
    })
    return image.write('img.png')
})