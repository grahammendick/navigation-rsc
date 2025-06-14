import Toggle from "./Toggle";
import Panel from "./Panel";
import { getPeople } from "./data";

const People = async ({ children }: any) => {
  const people = await getPeople();
  return (
    <>
      <h1>Inline</h1>
      <div>
        <ul>
          {people.map(({ id, name }) => (
            <li key={id}>
              <Toggle id={id}>{name}</Toggle>
              <Panel id={id}>{children}</Panel>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default People;
