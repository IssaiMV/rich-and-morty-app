import { Link, Switch, Route } from "wouter";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <>
      <nav>
        <Link href="/">Rick and Morty App</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/" component={CharacterList} />
          <Route path="/details/:id" component={CharacterDetails} />
        </Switch>
      </main>
    </>
  );
}
export default App;
