import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="h-screen bg-gray-300">
      <Outlet/>
      </main>
    </>
  );
}
