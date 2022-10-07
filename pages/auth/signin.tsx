import type { NextPage } from "next";
import Votes from "@/components/shared/votes/Votes";

const Page: NextPage = () => {
	return <div>
		<h1>Hello world</h1>
		<Votes votes={5} active={false}/>
	</div>;
};

export default Page;
