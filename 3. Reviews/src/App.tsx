import { useEffect, useState } from "react";
import "./App.css";
// import person1 from "./assets/person-1.jpeg";

function App() {
  interface IReview {
    id: number;
    name: string;
    job: string;
    img: string;
    text: string;
  }
  const reviews: IReview[] = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(reviews[index].img);
  const [name, setName] = useState(reviews[index].name);
  const [job, setJob] = useState(reviews[index].job);
  const [info, setInfo] = useState(reviews[index].text);

  const prevUser = () => {
    console.log("prev user");
    index === 0 ? setIndex(3) : setIndex((index) => index - 1);
  };

  const nextUser = () => {
    console.log("next user");
    index === 3 ? setIndex(0) : setIndex((index) => index + 1);
    console.log(index);

    // setImage(reviews[index].img);
    // setName(reviews[index].name);
    // setJob(reviews[index].job);
    // setInfo(reviews[index].text);
  };

  const randomUser = () => {
    setIndex(Math.floor(Math.random() * reviews.length));
  };

  useEffect(() => {
    setImage(reviews[index].img);
    setName(reviews[index].name);
    setJob(reviews[index].job);
    setInfo(reviews[index].text);
  }, [index]);

  return (
    <main className="App">
      <section className="container">
        {/* title */}
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        {/* reviews */}
        <article className="review">
          <div className="img-container">
            <img src={image} id="person-img" alt="" />
          </div>
          <h4 id="author">{name}</h4>
          <p id="job">{job}</p>
          <p id="info">{info}</p>
          {/* prev next buttons */}
          <div className="button-container">
            <button className="prev-btn" onClick={prevUser}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-btn" onClick={nextUser}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          {/* random button */}
          <button className="random-btn" onClick={randomUser}>
            surprise me
          </button>
        </article>
      </section>
    </main>
  );
}

export default App;
