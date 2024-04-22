import styles from "./home.module.css";
const Home = () => {
  return (
    <section>
      <div className="hero-section">
        <div>
          <h1>Welcome to my Github Repo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            vitae quibusdam, quos aliquam commodi, molestias qui doloribus
            similique consequatur fugiat possimus illum! In eos maxime eligendi
            et aspernatur id non!
          </p>
        </div>
        <div className="btn">
          <button>Goto Github</button>
          <button>See repositories</button>
        </div>
      </div>
    </section>
  );
};
export default Home;
