import type { NextPage } from "next";
import { client } from "../../prisma/client"

const Page: NextPage = () => {
	return <div>
		<h1>{client.user.count.name}</h1>
	</div>;
};

export default Page;
