import { useNavigationEvent } from "navigation-react";
import { getPerson } from "./data";
import Modal from "./Modal";

const Person = async () => {
  const {
    data: { id },
  } = useNavigationEvent();
  if (!id) return null;
  const person = await getPerson(id);
  return <Modal person={person} />;
};

export default Person;
