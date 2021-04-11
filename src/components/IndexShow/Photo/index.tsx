import React from "react";

import "./index.less";

const PHOTOS = [
  {
    name: "自然",
    thumb:
      "https://images.unsplash.com/photo-1573951875348-cfbd16f5ec0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80",
  },
  {
    name: "山",
    thumb:
      "https://images.unsplash.com/photo-1574001412492-7555e61a9b53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    name: "建筑",
    thumb:
      "https://images.unsplash.com/photo-1574033168889-cfc0ed3cc35c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  },
  {
    name: "天空",
    thumb:
      "https://images.unsplash.com/photo-1574011435834-e5393d4f2d1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    name: "人",
    thumb:
      "https://images.unsplash.com/photo-1573980126659-9a8d74a435c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    name: "城市",
    thumb:
      "https://images.unsplash.com/photo-1573924475028-1db9e3a475df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  },
  {
    name: "交通",
    thumb:
      "https://images.unsplash.com/photo-1573941097299-fd8c30a75b4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    name: "泰国",
    thumb:
      "https://images.unsplash.com/photo-1573948427350-47fa33d9880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
];

const PhotoShow = () => {
  return (
    <div className="container show photo-show">
      <h3 className="show-title serif">
        <p>「灵魂和身体总有一个要在路上」</p>
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
