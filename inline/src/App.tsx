"use server-entry";
import "./client";
import { SceneView } from "navigation-react";
import NavigationProvider from "./NavigationProvider";
import HmrProvider from "./HmrProvider";
import Layout from "./Layout";

const App = async ({ url }: any) => {
  return (
    <html>
      <head>
        <title>Inline</title>
      </head>
      <body>
        <NavigationProvider url={url}>
          <HmrProvider>
            <SceneView active="people" refetch={[]}>
              <Layout />
            </SceneView>
          </HmrProvider>
        </NavigationProvider>
      </body>
    </html>
  );
};

export default App;
