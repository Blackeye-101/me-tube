// TODO: create a script to seed categories

import { categories } from "@/db/schema"
import { db } from "@/db"

const categoryNames=[
    "Music",
    "Gaming",
    "Education",
    "Comedy",
    "Sports",
    "News",
    "Entertainment",
    "Science & Technology",
    "Travel & Events",
    "How-to & Style",
    "Film & Animation",
    "People & Blogs"
]

async function main(){
    console.log("Seeding categories...")

    try{
        const values=categoryNames.map((name)=>({
           name, 
           description: `Videos related to ${name.toLowerCase()}`
        }))

        await db.insert(categories).values(values)

        console.log("Categories seeded successfully")

    }catch(error){
        console.error("Error seeding categories:", error)
        process.exit(1)
    }
}

main()