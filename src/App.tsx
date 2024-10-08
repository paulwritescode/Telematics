import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";
import "../src/globals.css";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/Sidebar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <main className="min-h-screen p-4 md:p-0 md:mx-12">
          <Navbar />
          <section className="gap-10 mt-10 md:flex">
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
