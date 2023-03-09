import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[5.5vh]">
        <NavBar />
      </div>
      <div className="flex h-[92.5vh]">
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
