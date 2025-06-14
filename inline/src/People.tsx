import Toggle from "./Toggle";
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
              <Toggle id={id} name={name}>
                {children}
              </Toggle>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default People;
