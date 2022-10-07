import type { NextPage } from "next";
import Input from '../../components/shared/input/Input'
import {useState, useEffect} from 'react'

const Page: NextPage = () => {
	const [value, setValue] = useState("");
	const [isError, setIsError] = useState(false)

	return <div>
		{/* <h1>Hello world</h1> */}
		<Input value={value} setValue={setValue} isError={isError} errorMessage={"Invalid Password."} type="password" placeHolder={"Password"}/>

		<button onClick={() => console.log(value)}></button>
	</div>;
};

export default Page;
