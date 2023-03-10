import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import { getHomePageVideos } from '../redux/store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import Card from '../components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { clearVideos } from '../redux/store/Slices/YoutubeSlice';

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
          height={800}
          className='w-[85vw] flex flex-col items-center'
        >
          <div className="grid gap-y-14 gap-x-16 grid-cols-4 m-8 2xl:grid-cols-3  xl:grid-cols-2 lg:grid-cols-1 items-center">
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
