import { useNavigationEvent } from "navigation-react";
import { getPerson } from "./data";

const Person = async () => {
  const {
    data: { id },
  } = useNavigationEvent();
  if (!id) return null;
  const person = await getPerson(id);
  const { name, dateOfBirth, gender, email, phone } = person;
  return (
    <>
      <h2>{name}</h2>
      <div>{email}</div>
      <div>{dateOfBirth}</div>
      <div>{gender}</div>
      <div>{phone}</div>
    </>
  );
};

export default Person;
