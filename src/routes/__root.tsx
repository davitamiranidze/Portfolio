import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  ),
});
