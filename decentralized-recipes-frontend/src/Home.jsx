
function Home() {
  return (
    <div className="container">
      <div className="about">
        <h1>Welcome to Decentralized Recipe Sharing!</h1>
        <p>
          Our platform allows users to share their favorite recipes as NFTs. 
          Explore, upload, and enjoy a variety of delicious dishes from 
          around the world!
        </p>
      </div>
      <div className="photos">
        <div className="photo-container">
          <div className="photo">
            <img src={food1} alt="Food 1" />
          </div>
          <div className="photo">
            <img src={food2} alt="Food 2" />
          </div>
        </div>
        <div className="photo-container">
          <div className="photo">
            <img src={food3} alt="Food 3" />
          </div>
          <div className="photo">
            <img src={food4} alt="Food 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
