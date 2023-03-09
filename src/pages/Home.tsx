import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import { getHomePageVideos } from '../redux/store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import Card from '../components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { clearVideos } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos())
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[5.5vh]">
        <NavBar />
      </div>
      <div className="flex h-[92.5vh]">
        <SideBar />
        {videos.length ? (<InfiniteScroll
          dataLength={videos.length}
          next={() => dispatch(getHomePageVideos(true))}
          hasMore={VideoColorSpace.length < 500}
          loader={<Spinner />}
          height={650}
        >
          <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
            {videos.map((item:HomePageVideos) => {
              return <Card data={item} key={item.videoId} />
            })}
          </div>
          </InfiniteScroll>) : (<Spinner />)}
      </div>
    </div>
  );
};

export default Home;
