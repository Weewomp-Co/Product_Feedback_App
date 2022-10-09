import type { NextPage } from "next";
import Votes from "@/components/shared/votes/Votes";
import Input from "../../components/shared/input/Input";
import { useState } from "react";

const Page: NextPage = () => {
  const [value, setValue] = useState("");
  const [votes, setVotes] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);

  return (
    <div>
      <h1>Hello world</h1>
      <Input
        isError={false}
        setValue={setValue}
        value={value}
        errorMessage={"Invalid input"}
        type="text"
        placeHolder="username"
      />
      <Votes 
        votes={votes} 
        setVotes={setVotes}
        active={hasClicked} 
        setActive={setHasClicked}
      />
    </div>
  );
};

export default Page;
