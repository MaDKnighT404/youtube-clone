import { HomePageVideos } from '../Types';
import { Link } from 'react-router-dom';
const SearchCard = ({ data }: { data: HomePageVideos }) => {
  return (
    <div className="flex gap-3 lg:flex-col items-center">
      <div className="relative">
        <span className="absolute bottom-3 left-[300px] z-10 bg-gray-900 px-2 py-0.5 text-sm">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img src={data.videoThumbnail} className="h-52 min-w-[370px]  object-contain" alt="thumbnail" />
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="max-w-2xl lg:max-w-sm">
          <a href="#" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h3>
        <div className="text-grap-400 text-xs">
          <div>
            <div>
              <span className="after:mx-1 after:content-['•']">{data.videoViews} views</span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
        <div className="my-2 min-w-fit">
          <a href="#" className="flex items-center gap-2 text-xs text-gray-400">
            <img className="h-9 w-9 rounded-full" src={data.channelInfo.image} alt="channel" />
            <span>{data.channelInfo.name}</span>
          </a>
        </div>
        <div className="max-w-2xl lg:max-w-sm text-sm text-gray-400 line-clamp-2">
          <p>{data.videoDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
