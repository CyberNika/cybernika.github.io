import React from "react";

import "./index.less";

const PHOTOS = [
  {
    name: "自然",
    thumb: "/photos/nature.jpg",
  },
  {
    name: "雪山",
    thumb: "/photos/mountain-1.jpg",
  },
  {
    name: "建筑",
    thumb: "/photos/building.jpg",
  },
  {
    name: "街头",
    thumb: "/photos/city.jpg",
  },
  {
    name: "城市",
    thumb: "/photos/city-1.jpg",
  },
  {
    name: "人",
    thumb: "/photos/people.jpg",
  },
  {
    name: "海",
    thumb: "/photos/sea.jpg",
  },
  {
    name: "夜晚",
    thumb: "/photos/night.jpg",
  },
];

const PhotoShow = () => {
  return (
    <div className="container container-R show photo-show">
      <h3 className="show-title serif">
        <p>
          灵魂和身体<span className="magic">总有一个要在路上</span>
        </p>
        <p>而我，更想让它们相伴而行</p>
      </h3>

      <ul className="photos">
        {PHOTOS.map((item, index) => (
          <li key={index} className="photo-item">
            <img
              src={item.thumb}
              alt={item.name}
              className="photo-item-thumb"
            />
            <label className="photo-item-label">{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoShow;
