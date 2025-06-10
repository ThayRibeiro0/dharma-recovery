import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <section className="home-section">

      <div className="welcome-message">
        <h1>
          Recovery Dharma Costa Mesa</h1>
        <p>A community providing support for Recovery and personal growth.</p>
      </div>

      <div className="main-content">
        <Link to="/meetings" className="cta-button">Participate Now</Link>
      </div>
    </section>

  );
};

export default Home;
