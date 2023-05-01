import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className='grid place-items-center h-screen bg-[#dadbd3]'>
      <div className='flex bg-[#ededed] mt-[-50px] h-[90vh] w-[90vw]  shadow-2xl'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
