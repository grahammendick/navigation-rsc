"use server-entry";
import { getPeople } from "./data";
import { SceneView } from "navigation-react";
import Toggle from "./Toggle";
import Person from "./Person";

const People = async () => {
  const people = await getPeople();
  return (
    <>
      <h1>Inside</h1>
      <div>
        <ul>
          {people.map(({ id, name }) => (
            <li key={id}>
              <Toggle id={id}>{name}</Toggle>
            </li>
          ))}
          <SceneView active="people" name="person">
            <Person />
          </SceneView>
        </ul>
      </div>
    </>
  );
};

export default People;
