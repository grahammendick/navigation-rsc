"use server-entry";
import { SceneView } from "navigation-react";
import People from "./People";
import Person from "./Person";

const Layout = async () => {
  return (
    <People>
      <SceneView active="people" name="person" refetch={["id"]}>
        <Person />
      </SceneView>
    </People>
  );
};

export default Layout;

