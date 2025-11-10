
import './App.css'
import Titel from './assets/Titel.jsx';
import Beruf from './assets/Beruf.jsx';
import Center from './assets/Center.jsx';

function App() {
  return (
    <div className="app-container">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/Video.mp4" type="video/mp4" />
        Dein Browser unterstützt das Video-Tag nicht.
      </video>

      <div className="video-overlay"></div>

      <div className="title-content">
        <h1 className="title-main">Willkommen auf meiner Webseite</h1>
        <div className="profile-photo-wrapper">
          <img src="/foto.jpg" alt="Hakan" className="profile-photo" />
        </div>
        <p className="title-sub">Hi, ich bin Hakan — Digital Product Designer & Webentwickler</p>
        <Center>
          <Titel />
          <Beruf />
        </Center>
      </div>
    </div>
  )
}

export default App
