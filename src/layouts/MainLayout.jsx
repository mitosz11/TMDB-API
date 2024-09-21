import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-300">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
