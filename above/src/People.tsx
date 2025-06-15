"use server-entry";
import { getPeople } from "./data";
import { RefreshLink, SceneView } from "navigation-react";

const People = async () => {
  const people = await getPeople();
  return (
    <>
      <h1>Above</h1>
      <div>
        <ul>
          {people.map(({ id, name }) => (
            <li key={id}>
              <RefreshLink navigationData={{ id }}>
                {name}
              </RefreshLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default People;
