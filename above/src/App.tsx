"use server-entry";
import "./client";
import { SceneView } from "navigation-react";
import NavigationProvider from "./NavigationProvider";
import HmrProvider from "./HmrProvider";
import People from "./People";
import Person from "./Person";

const App = async ({ url }: any) => {
  return (
    <html>
      <head>
        <title>Above</title>
      </head>
      <body>
        <NavigationProvider url={url}>
          <HmrProvider>
            <SceneView active="people" refetch={[]}>
              <People />
            </SceneView>
            <SceneView active="people" name="person">
              <Person />
            </SceneView>
          </HmrProvider>
        </NavigationProvider>
      </body>
    </html>
  );
};

export default App;
