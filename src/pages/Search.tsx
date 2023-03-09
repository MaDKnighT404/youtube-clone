import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { clearVideos } from '../redux/store/Slices/YoutubeSlice';
import { useNavigate } from 'react-router-dom';
import { getSearchPageVideos } from '../redux/store/reducers/getSearchPageVideos';
import SearchCard from '../components/SearchCard';

const Search = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const navigate = useNavigate();

  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === '') navigate('/');
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[5.5vh]">
        <NavBar />
      </div>
      <div className="flex h-[92.5vh]">
        <SideBar />
        {videos.length ? (
          <div className="flex w-full flex-col gap-5 py-8 pl-8">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={VideoColorSpace.length < 500}
              loader={<Spinner />}
              height={600}
            >
              {videos.map((item: HomePageVideos) => {
                return (
                  <div className="my-5">
                    <SearchCard data={item} key={item.videoId} />
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Search;
