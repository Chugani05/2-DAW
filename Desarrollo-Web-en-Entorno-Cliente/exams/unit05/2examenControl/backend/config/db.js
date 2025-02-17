import mongoose from 'mongoose'
import colors from 'colors'

export const db = async () => {
    try {
        
const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

        const url = `${db.connection.host}:${db.connection.port}`
        console.log( colors.cyan(`MongoDB se conectó correctamente: ${url}`))
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}