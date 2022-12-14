const { MongoClient, ServerApiVersion } = require("mongodb");

async function main() {
	/**
	 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
	 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
	 */
	const uri =
		"mongodb+srv://liamtran:8LKDccrQdUIIWlax@cluster0.eyypqxe.mongodb.net/?retryWrites=true&w=majority";

	const client = new MongoClient(uri);

	try {
		// Connect to the MongoDB cluster
		await client.connect();

		// Make the appropriate DB calls
		await listDatabases(client);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

main().catch(console.error);

async function listDatabases(client) {
	const databaseList = await client.db().admin().listDatabases();
	console.log("database");
	databaseList.databases.forEach((db) => {
		console.log(`${db.name}`);
	});
}
