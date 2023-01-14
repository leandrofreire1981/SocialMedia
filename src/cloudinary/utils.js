import cloudinary from "cloudinary";

const { cloud_name, api_key, api_secret } = process.env

export const cloudinary = cloudinary.config({
    cloud_name,
    api_key,
    api_secret
})