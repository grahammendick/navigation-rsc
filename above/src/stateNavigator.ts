import { StateNavigator } from "navigation";

const stateNavigator = new StateNavigator([
  { key: "people", route: "{id?}", defaults: { id: 0 } },
]);
stateNavigator.historyManager.stop();

export default stateNavigator;
