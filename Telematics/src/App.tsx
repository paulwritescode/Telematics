import { ThemeProvider } from "@/components/theme-provider";

import "../app/globals.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <Navbar />
        <div className="">this is the content page</div>
      </>
    </ThemeProvider>
  );
}

export default App;
