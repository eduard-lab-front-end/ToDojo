import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className=''>
        <Sidebar/>
        <Footer/>
      </div>
    </div>
  )
}
