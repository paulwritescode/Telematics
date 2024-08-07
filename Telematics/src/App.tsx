import { ThemeProvider } from "@/components/theme-provider";

import "../app/globals.css";
import Navbar from "./components/navbar/Navbar";
import { SidebarDemo } from "./components/sidebar/SidebarDemo";

function App() {
  console.log("I am here");
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <main className="min-h-screen p-4 ">
          <Navbar />
          <section className="mt-3 ">
            <SidebarDemo />
          </section>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
