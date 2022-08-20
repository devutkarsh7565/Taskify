import React from "react";

interface Props {
  name?: string;
  count: number;
  countFunction: any;
  status: "single" | "commited" | "coder";
}

const Profile = ({ name, count, countFunction, status }: Props) => {
  // array in typescript
  let arr: [number, string] = [6, "tiwari"];
  // object in typescript
  type Person = {
    name: string;
    age?: number;
  };
  let person: Person = {
    name: "utkarsh",
  };
  console.log(person);

  // any in typescript
  let personName: unknown;
  const counter = () => {
    countFunction(count + 1);
  };
  console.log(arr);
  return (
    <>
      <div>Name - {name}</div>
      <h1>status - {status}</h1>
      <button onClick={counter} className="px-3 py-2 bg-green-500">
        +
      </button>
    </>
  );
};

export default Profile;
