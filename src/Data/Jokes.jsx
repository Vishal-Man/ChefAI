import Jokes from "./JokeProp";
import jokesData from "./jokesData";

export default function Joke() {
    const jokeElement = jokesData.map(
        joke => {
            return(
                <Jokes
                    key={joke.id}
                    setup={joke.setup}
                    punchline={joke.punchline}
                />
            )
        })
        return (
            <div>
                {jokeElement}
            </div>
        )
}