import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
    'Cars and Vehicles',
    'Comedy',
    'Education',
    'Gaming',
    'Entertainment',
    'Film and Animation',
    'How-to and Lifestyle',
    'Music',
    'News and Politics',
    'People and blogs',
    'Pets and animals',
    'Science and Technology',
    'Sports',
    'Travel and Events'
];

async function main() {
    console.log('Seeding categories');

    try {
        const values = categoryNames.map((name) => ({ name, description: `Video related to ${name.toLowerCase()}` }))
        await db.insert(categories).values(values).execute();

        console.log('Categories seeded successfully');
    } catch (error) {
        console.error('Error seeding categories:', error);
        process.exit(1);
    }

    
}

main()

