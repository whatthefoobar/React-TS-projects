import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      question: "do you accept all major credit cards?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
    },
    {
      question: "do you suppport local farmers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
    },
    {
      question: "do you use organic ingredients?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number): void => {
    // eslint-disable-next-line
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="App">
      <section className="questions">
        <div className="title">
          <h2>general questions</h2>
        </div>

        <div className="section-center">
          {data.map((item, i) => (
            <article
              key={i}
              className={selected === i ? "question show-text" : "question"}
            >
              <div className="question-title" onClick={() => toggle(i)}>
                <p>{item.question}</p>
                <button type="button" className="question-btn">
                  <span className="button">
                    {selected === i ? (
                      <span className="minus-icon">
                        <i className="far fa-minus-square"></i>
                      </span>
                    ) : (
                      <span className="plus-icon">
                        <i className="far fa-plus-square"></i>
                      </span>
                    )}
                  </span>
                </button>
              </div>

              <div className="question-text">
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
