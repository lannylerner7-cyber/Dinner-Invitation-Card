import { useEffect, useRef, useState } from 'react';

const BASE = import.meta.env.BASE_URL;

function App() {
  const [shown, setShown] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { v.pause(); setPlaying(false); return; }
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <main className="scene">
      <video
        ref={videoRef}
        className="bg-video"
        src={`${BASE}api/dinner-media/dinner-night.mp4`}
        poster={`${BASE}api/dinner-media/dinner-poster.jpg`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="overlay" aria-hidden="true" />
      <button
        type="button"
        className="video-toggle"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Pause background video' : 'Play background video'}
        data-testid="button-video-toggle"
      >
        {playing ? (
          <svg viewBox="0 0 16 16" aria-hidden="true"><rect x="4" y="3" width="3" height="10" fill="currentColor" /><rect x="9" y="3" width="3" height="10" fill="currentColor" /></svg>
        ) : (
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3l8 5-8 5z" fill="currentColor" /></svg>
        )}
      </button>
      <article className="invitation" aria-labelledby="invite-title">
        <p className="eyebrow">A seat at the table, just for you</p>
        <p className="small-label">You're invited to</p>
        <h1 id="invite-title">Dinner <em>night.</em></h1>
        <p className="description">Making it to this page means you're personally invited. Join us for an evening of good food, great company, and conversations that last a little longer.</p>
        <p className="details">For RSVP details, continue with Google.</p>
        <a className="google" href="#" id="continue-link" data-testid="link-continue-google"
          onClick={(e) => { e.preventDefault(); setShown(true); }}>
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.560 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.570-.15-3.090-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65Z" />
            <path fill="#FBBC05" d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19A23.85 23.85 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19Z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
          </svg>
          Continue with Google
        </a>
        <p className="note">Just an invitation. No sign-in required.</p>
        <p className="message" id="invite-message" role="status" hidden={!shown} data-testid="status-invite-message">You're in good company. The dinner details will follow — no Google sign-in is connected to this invitation.</p>
        <p className="footer">Come hungry. Stay a little longer.</p>
      </article>
    </main>
  );
}

export default App;
