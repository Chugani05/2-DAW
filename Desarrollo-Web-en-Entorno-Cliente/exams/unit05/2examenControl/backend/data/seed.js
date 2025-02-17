import dotenv from 'dotenv'
import colors from 'colors'
import { db } from '../config/db.js'
import Services from '../models/Services.js'
import { services } from './beautyServices.js'

dotenv.config()
await db()

async function seedDB() {
    try {
        await Services.insertMany(services)
        console.log(colors.green.bold('Se agregaron los datos correctamente'))
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

async function clearDB() {
    try {
        await Services.deleteMany()
        console.log(colors.red.bold('Se eliminaron los datos'))
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if(process.argv[2] === '--import') {
    seedDB()
} else {
    clearDB()
}