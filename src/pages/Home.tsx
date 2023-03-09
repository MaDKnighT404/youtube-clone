import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import { getHomePageVideos } from '../redux/store/reducers/getHomePageVideos';

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false))
  }, [dispatch]);

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
