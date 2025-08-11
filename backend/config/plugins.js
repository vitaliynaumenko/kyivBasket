module.exports = () => ({
    upload:{
      config:{
        provider:'cloudinary',
        previewOptions:{
          cloud_name: process.env.CLOUDARY_NAME,
          api_key: process.env.CLOUDARY_API_KEY,
          api_secret: process.env.CLOUDARY_API_SECRET
        }
      }
    }
});
