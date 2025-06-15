import { useNavigationEvent } from "navigation-react";
import Details from "./Details";
import { getPerson } from "./data";

const Person = async () => {
  const {
    data: { id },
  } = useNavigationEvent();
  if (!id) return null;
  const person = await getPerson(id);
  return <Details person={person} />;
};

export default Person;
