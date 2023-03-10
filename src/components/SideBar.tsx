import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlineFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from 'react-icons/md';
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb';
import { FaRegCompass } from 'react-icons/fa';
import { GiFilmStrip } from 'react-icons/gi';

const SideBar = () => {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: 'Home',
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: 'Explore',
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: 'Shorts',
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: 'Subscriptions',
    },
  ];
  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: 'Libary',
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: 'History',
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: 'Your Videos',
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: 'Watch Later',
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: 'Liked Videos',
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: 'Music',
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: 'Sport',
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: 'Gaming',
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: 'Films',
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: 'Settings',
    },
    {
      icon: <MdOutlineFlag className="text-xl" />,
      name: 'Report History',
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: 'Help',
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: 'Send Feedback',
    },
  ];

  const textLinks = [
    ['About', 'Press', 'Copyright', 'Contact us', 'Advertise', 'Developers'],
    ['Terms', 'Privacy', 'Policy & Safety', 'How YouTube works', 'Test new features'],
  ];

  return (
    <div className="w-2/12 min-w-[200px] bg-[#212121] overflow-auto pb-8 sidebar sm:hidden">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`${name === 'Home' ? 'bg-slate-600' : ''}`}
            >
              <a href="#" className="flex items-center gap-5 pl-6 py-3 hover:bg-zinc-600">
                {icon}
              <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
            >
              <a href="#" className="flex items-center gap-5 pl-6 py-3 hover:bg-zinc-600">
                {icon}
              <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
            >
              <a href="#" className="flex items-center gap-5 pl-6 py-3 hover:bg-zinc-600">
                {icon}
              <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
            >
              <a href="#" className="flex items-center gap-5 pl-6 py-3 hover:bg-zinc-600">
                {icon}
              <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>
        })}
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>
        })}
      </ul>
      <span className='px-4 text-sm text-zinc-400'>&copy; 2022 Google</span>
    </div>
  );
};

export default SideBar;
