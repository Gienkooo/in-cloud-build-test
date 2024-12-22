export interface ImageUploadRequest {
    file: Express.Multer.File;
    description?: string;
}

export interface ImageResponse {
    url: string;
    message: string;
}