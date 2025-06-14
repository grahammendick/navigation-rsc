"use server-entry";
import "./client";
import { SceneView } from "navigation-react";
import NavigationProvider from "./NavigationProvider";
import HmrProvider from "./HmrProvider";
import People from "./People";

const App = async ({ url }: any) => {
  return (
    <html>
      <head>
        <title>Inside</title>
      </head>
      <body>
        <NavigationProvider url={url}>
          <HmrProvider>
            <SceneView active="people" refetch={[]}>
              <People />
            </SceneView>
          </HmrProvider>
        </NavigationProvider>
      </body>
    </html>
  );
};

export default App;
