// const Property = require('../model/property'); 

// async function handlerSend(req, res) {
//     try {
//         const { body, files } = req;

        
//         const photos = files ? files.map(f => f.filename) : [];

//         // Create a new property document
//         const property = new Property({
//             ...body,  
//             photos,   
//         });

//         // Save to MongoDB
//         await property.save();

//         res.status(201).json({
//             message: "Property submitted successfully ✅",
//             property,
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ 
//             message: "Server Error", 
//             error: error.message 
//         });
//     }
// }

// module.exports.handlerSend=handlerSend;
async function handlerSend(req, res) {
    try {
        const { body, files } = req;

        // Extract Cloudinary URLs
        const photos = files ? files.map(f => f.path) : []; // path contains Cloudinary URL

        // Create a new property document
        const property = new Property({
            ...body,
            photos,
        });

        // Save to MongoDB
        await property.save();

        res.status(201).json({
            message: "Property submitted successfully ✅",
            property,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: "Server Error", 
            error: error.message 
        });
    }
}

module.exports.handlerSend = handlerSend;
