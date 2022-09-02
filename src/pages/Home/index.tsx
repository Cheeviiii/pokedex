import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PokemonList } from "../../components/PokemonList";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full flex items-center justify-center p-5">
        <PokemonList />
      </div>
      <Footer />
    </>
  );
};
