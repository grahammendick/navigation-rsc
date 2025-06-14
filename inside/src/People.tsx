"use server-entry";
import { getPeople } from "./data";
import { RefreshLink, SceneView } from "navigation-react";
import Person from "./Person";

const People = async () => {
  const people = await getPeople();
  return (
    <>
      <h1>People</h1>
      <div>
        <ul>
          {people.map(({ id, name }) => (
            <li key={id}>
              <RefreshLink navigationData={{ id }} disableActive>
                {name}
              </RefreshLink>
            </li>
          ))}
          <SceneView active="people" name="person" refetch={["id"]}>
            <Person />
          </SceneView>
        </ul>
      </div>
    </>
  );
};

export default People;
