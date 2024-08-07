import { ThemeProvider } from "@/components/theme-provider";

import { Outlet } from "react-router-dom";
import "../app/globals.css";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/Sidebar";

function App() {
  console.log("I am here");
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <main className="min-h-screen p-4 ">
          <Navbar />
          <section className="flex gap-10 mt-3 ">
            <SideBar />
            <Outlet />
          </section>
          <section></section>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
