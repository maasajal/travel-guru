import bgImage from "../../assets/images/Rectangle 1.png";
const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="max-w-6xl mx-auto px-3 md:px-5 text-white">
          <h2 className="font-bebasNeue">This is Home | Travel Guru</h2>
        </div>
      </div>
    </>
  );
};
export default Home;
