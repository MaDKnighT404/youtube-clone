import { HomePageVideos } from '../Types';
import { Link } from 'react-router-dom';
const Card = ({ data }: { data: HomePageVideos }) => {
  return (
    <div className="w-64 h-60 flex flex-col">
      <div className="relative border-2 border-red-100 border-b-0">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-44 w-72"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-2 bg-[#212121] border-2 border-red-100 border-t-0 pt-3">
        <div className="min-w-fit p-2 pt-1">
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
        <div className='p-2 pt-0'>
          <h3>
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-sm text-gray-400">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
