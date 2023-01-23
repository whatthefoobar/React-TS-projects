import React from "react";
interface IMenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

interface IProps {
  item: IMenuItem;
}

const MenuItem = ({ item }: IProps) => {
  return (
    <article className="menu-item">
      <img src={item.img} alt={item.title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{item.title}</h4>
          <h4 className="price">${item.price}</h4>
        </header>
        <p className="item-text">{item.desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
