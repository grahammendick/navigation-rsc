"use server-entry";
import { SceneView } from "navigation-react";
import People from "./People";
import Person from "./Person";

const Layout = async () => (
  <People>
    <SceneView active="people" name="person">
      <Person />
    </SceneView>
  </People>
);

export default Layout;
