import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Swappi</h1>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Move Your Music Between Platforms</h1>
            <p className="hero-subtitle">
              Seamlessly transfer your playlists between Spotify and Apple Music. 
              Your music, your control, all in one place.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="section-title">Why Swappi?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Privacy First</h3>
                <p>
                  All your data stays on your device. We never store your playlists, 
                  credentials, or personal information.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Fast & Easy</h3>
                <p>
                  Transfer playlists in seconds. Our smart matching algorithm finds 
                  your tracks across platforms automatically.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎵</div>
                <h3>Smart Matching</h3>
                <p>
                  Advanced track matching ensures your playlists transfer accurately, 
                  matching songs by title, artist, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Connect Your Accounts</h3>
                <p>Log in to both Spotify and Apple Music securely</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Select Your Playlist</h3>
                <p>Choose the playlist you want to transfer</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Match & Transfer</h3>
                <p>We find matching tracks and create your new playlist</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Swappi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
