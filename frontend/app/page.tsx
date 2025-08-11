import Header from "@/app/components/Header";
import SliderGame from "@/app/components/SliderGame";
import Banner from "@/app/components/Banner";
import {getMenu} from "@/app/api/api";

const Home= async ()=> {

  return (
      <>
        <SliderGame/>
        <Banner/>
      </>


  );
}
export default Home
