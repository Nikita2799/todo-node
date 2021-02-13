require('dotenv').config()

export const config = {
    server:{
        PORT: process.env.PORT,
        HOST: process.env.HOST
    },
    db:{
        URL: process.env.URL_MONGO_DB
    }
}