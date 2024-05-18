import { Contact, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Contact).values([
		{
			first_name: "Farook",
			last_name: "Quisar",
			email_address: "5CfZ7@example.com",
			query_type: "general-enquiry",
			message: "Hi there!",
			consent: true,
		},
	]);
}
