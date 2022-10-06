import type { NextPage } from "next";
import Input from '../../components/shared/input/Input'
import {useState, useEffect} from 'react'

const Page: NextPage = () => {
	const [value, setValue] = useState("Username");
	const [isError, setIsError] = useState(false)

	return <div>
		{/* <h1>Hello world</h1> */}
		<Input value={value} setValue={setValue} isError={isError} errorMessage={"Input is invalid."} type="text" placeHolder={"Input something here."}/>

		<button onClick={() => console.log(value)}></button>
	</div>;
};

export default Page;
