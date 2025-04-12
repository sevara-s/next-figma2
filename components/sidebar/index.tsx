import React from "react";

// svg import
import play from "../../public/svgs/play.svg";
import music from "../../public/svgs/music.svg";
import radio from "../../public/svgs/radio.svg";
import library from "../../public/svgs/library.svg";
const discover = [
  {
    id: 1,
    name: "Listen Now",
    img: play,
  },
  {
    id: 2,
    name: "Browse",
    img: music,
  },
  {
    id: 3,
    name: "Radio",
    img: radio,
  },
];
const lib = [
  {
    id: 1,
    name: "Playlists",
    img: library,
  },
  {
    id: 2,
    name:"Songs",
    img: library,
  },
  {
    id: 3,
    name: "Songs",
    img: library,
  },
  {
    id: 4,
    name: "Made for you",
    img: library,
  },
  {
    id: 5,
    name: "Artists",
    img: library,
  },
  {
    id: 6,
    name: "Albums",
    img: library,
  },
];

const playlist =[
    {
        id: 1,
        name: "PRecently Added",
        img: library,
      },
      {
        id: 2,
        name:"Recently Played",
        img: library,
      },
      {
        id: 3,
        name: "Songs",
        img: library,
      },
      {
        id: 4,
        name: "Made for you",
        img: library,
      },
      {
        id: 5,
        name: "Artists",
        img: library,
      },
      {
        id: 6,
        name: "Albums",
        img: library,
      },
   
]

const Sidebar = () => {
  return (
    <div className="sidebar w-[296px] h-screen">
      <h1 className="font-[600] text-[18px] text-[#09090b]">Discover</h1>

      <div className="discover flex flex-col gap-[15px]"></div>
    </div>
  );
};

export default Sidebar;
