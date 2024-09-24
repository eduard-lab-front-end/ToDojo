import List from "./List";

export default function HomePage() {
  return (
    <div>
      <div className="">
        {/* The Navbar, Footer, and Sidebar components
         should be displayed on all the pages */}
        <p>Create new Todo</p>
        <form>
          <input type="text" />
          <input type="checkbox" />
          <button type="submit">Add</button>
        </form>
        <List />
      </div>
    </div>
  );
}
