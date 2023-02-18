import { createRoot } from "react-dom/client";

import App from "./App";
import UsersProvider from "./UsersProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <UsersProvider>
    <App />
  </UsersProvider>
);
