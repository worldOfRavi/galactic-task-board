import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row h-[90vh] ">
        <Sidebar />
        <Board />
      </div>
    </div>
  );
};

export default App;
