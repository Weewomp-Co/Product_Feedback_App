import type { NextPage } from "next";
import Input from "../../components/shared/input/Input";
import { useState, useEffect } from "react";

const Page: NextPage = () => {
  const [value, setValue] = useState("");

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
    </div>
  );
};

export default Page;
