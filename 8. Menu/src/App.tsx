import { useState } from "react";
import "./App.css";
import parse from "html-react-parser";
import menuItem from "./assets/img/menu-item.jpeg";
// import menuItem1 from "./assets/img/item-1.jpeg";
// import menuItem2 from "./assets/img/item-2.jpeg";
// import menuItem3 from "./assets/img/item-3.jpeg";
// import menuItem4 from "./assets/img/item-4.jpeg";
// import menuItem5 from "./assets/img/item-5.jpeg";
// import menuItem6 from "./assets/img/item-6.jpeg";
// import menuItem7 from "./assets/img/item-7.jpeg";
// import menuItem8 from "./assets/img/item-8.jpeg";
// import menuItem9 from "./assets/img/item-9.jpeg";
// import menuItem10 from "./assets/img/item-10.jpeg";

function App() {
  const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./assets/img/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./assets/img/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./assets/img/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./assets/img/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./assets/img/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./assets/img/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./assets/img/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./assets/img/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./assets/img/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./assets/img/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  const initialSection = parse(`<article className="menu-item">
            <img src=${menuItem} alt="menu item" className="photo" />
            <div className="item-info">
              <header>
                <h4>buttermilk pancakes</h4>
                <h4 className="price">$15</h4>
              </header>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
                inventore laboriosam excepturi! Quo, officia.
              </p>
            </div>
          </article>
          
          <article className="menu-item">
            <img src=${menuItem} alt="menu item" className="photo" />
            <div className="item-info">
              <header>
                <h4>buttermilk pancakes</h4>
                <h4 className="price">$15</h4>
              </header>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
                inventore laboriosam excepturi! Quo, officia.
              </p>
            </div>
          </article>
         
          <article className="menu-item">
            <img src=${menuItem} alt="menu item" className="photo" />
            <div className="item-info">
              <header>
                <h4>buttermilk pancakes</h4>
                <h4 className="price">$15</h4>
              </header>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, sint quam. Et reprehenderit fugiat nesciunt
                inventore laboriosam excepturi! Quo, officia.
              </p>
            </div>
          </article>`);
  const [sectionCenter, setSectionCenter] = useState(initialSection);

  return (
    <div className="App">
      <section className="menu">
        {/* title  */}
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* filter buttons  */}
        <div className="btn-container">
          {/*  <button type="button" className="filter-btn" data-id="all">all</button>
        <button type="button" className="filter-btn" data-id="breakfast">
          breakfast
        </button>
        <button type="button" className="filter-btn" data-id="lunch">lunch</button>
        <button type="button" className="filter-btn" data-id="shakes">
          shakes
        </button>  */}
        </div>
        {/* menu items  */}
        <div className="section-center">{sectionCenter}</div>
      </section>
    </div>
  );
}

export default App;
