import { useEffect } from "react";
import { useState } from "react";

export default function Joker() {
  const url = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    setJoke({
      setup: data.setup,
      punchline: data.punchline,
    });
  };

  let [joke, setJoke] = useState({});
  //   let [joke, setJoke] = useState(getNewJoke);

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(url);
      let data = await response.json();

      setJoke({
        setup: data.setup,
        punchline: data.punchline,
      });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h3>Joker</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
