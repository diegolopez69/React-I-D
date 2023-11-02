import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName="midudev" name="Diego López Escobar" />
      <TwitterFollowCard isFollowing={false} userName="pheralb" name="Un random " />
      <TwitterFollowCard isFollowing userName="cvander" name="C vander guatemala" />
    </section>
  );
}
