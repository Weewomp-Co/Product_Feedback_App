import type { NextPage } from "next";
import { styled } from '@stitches/react';
import {Button1, Button2, Button3, Button4} from '../../components/shared/buttons/Button.tsx'
import { BackButton1, BackButton2 } from "@/components/shared/buttons/BackButton";
import { backArrow1, backArrow2 } from "../../assets/assets";
import Image from "next/image";

// const Button0 = styled('button', {
// 	backgroundColor:  
// })

const Page: NextPage = () => {
	return <div>
		<h1>Hello world</h1>
		
		<div className="buttonsWrapper" style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "8em",
				flexDirection: "column",
				height: "50vh"
			}}>

			<div className="buttonsShowcase" style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "2em"
			}}>
			<Button1>Button 1</Button1>
			<Button2>Button 2</Button2>
			<Button3>Button 3</Button3>
			<Button4>Button 4</Button4>
			</div>

			
			<div className="backButtonShowcase" style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "2em"
			}}>
				<BackButton1><Image src={backArrow1}/> Go Back</BackButton1>
				<BackButton2><Image src={backArrow2}/> Go Back</BackButton2>
			</div>
		</div>
	</div>;
};

export default Page;
