import express from 'express';
import multer from 'multer';

const app = express();
const upload = multer({ dest: 'uploads/' });

interface ImageUploadRequest extends express.Request {
    file?: Express.Multer.File;
}

interface ImageResponse {
    message: string;
    url: string;
}

app.post('/upload', upload.single('image'), (req: ImageUploadRequest, res: express.Response<ImageResponse>) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded', url: '' });
    }

    const response: ImageResponse = {
        message: 'File uploaded successfully',
        url: `/uploads/${req.file.filename}`
    };

    return res.status(200).json(response);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});