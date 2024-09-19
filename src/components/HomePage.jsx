import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import List from "./List";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="">
        <List />
        <Sidebar />
        <Footer />
      </div>
    </div>
  );
}
