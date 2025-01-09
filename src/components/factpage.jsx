import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch } from "react-icons/fa";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
const Factcard = () => {
  // for the favourite icon

  return (
    <div className="fact-card h-5/6 w-[28rem] rounded-t-full bg-white -z-10 fixed top-56 flex flex-col items-center px-[4rem]">
      <h3 className="dyk mt-40 text-3xl font-bold mb-2 text-amber-950">
        Did You Know
      </h3>
      <p className="fact">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi illo
        blanditiis dolor dicta. Error et tempora hic ut cumque, sequi sunt
        reiciendis dignissimos at nobis labore, voluptatem doloribus vitae
        aliquam. Lorem ipsum dolor sit amet consectetur
      </p>
    </div>
  );
};
export default function Factpage() {
  return (
    <>
      <section className="fact-page flex flex-col items-center">
        {/* search icon */}
        <div className="search fixed right-4 top-4 h-[4.5rem] w-[4.5rem] rounded-4 bg-white rounded-full flex items-center justify-center">
          <FaSearch className="search-icon text-[3rem] text-amber-700" />
        </div>

        <div className="animal-image bg-amber-800 h-[20rem] w-5/6 border-amber-500 border-4 rounded-full mt-16 sm:h-60 sm:w-60 flex items-center justify-center">
          <img
            src="/public/lion.jpg"
            className="w-[95%] h-[95%] rounded-full"
            alt=""
          />
        </div>
        <Factcard />
      </section>
    </>
  );
}
