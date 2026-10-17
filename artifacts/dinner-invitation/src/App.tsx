import { useState } from 'react';

function App() {
  const [shown, setShown] = useState(false);
  return (
    <main className="scene">
      <article className="invitation" aria-labelledby="invite-title">
        <p className="eyebrow">A seat at the table, just for you</p>
        <svg className="illustration" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M30 150c35-9 141-9 181 0M39 157c36-7 122-7 163 0" opacity=".35" />
            <ellipse cx="121" cy="142" rx="36" ry="7" /><ellipse cx="121" cy="141" rx="26" ry="4" opacity=".45" />
            <path d="M115 124h12l5 11h-22l5-11ZM120 124V95m-14 0h28m-24 0 4-8h12l4 8M114 87V50h12v37" />
            <path d="M114 55c4 3 8-4 12 0m-8-5v8c0 3 4 3 4 0v-5" opacity=".6" />
            <path d="M67 144v-23m-10 23h20m-13-45h6l7 11c4 8-2 14-10 14s-14-6-10-14l7-11Zm-5 12h16" />
            <path d="M174 144v-26m-10 26h20m-22-48h24l-2 16c-1 10-19 10-20 0l-2-16Zm2 14h20" />
            <path d="M41 136c-3-18-13-29-21-34 1 15 9 28 21 34Zm-4-10c4-15 2-25-2-33-5 14-5 24 2 33Zm2 8-11-18m13 20 4 12" />
            <path d="M198 138c1-16 11-30 22-37-1 18-10 31-22 37Zm5-14c-4-13-3-24 1-31 5 13 5 23-1 31Zm-5 14 13-22m-13 22-4 10" />
            <path d="m92 54-5-3m8-10-3-4m50 12 5-3m-9-9 3-5" stroke="#b98c51" />
          </g>
          <path className="flame" d="M120 45c-10-5-4-13 1-21-1 9 9 14-1 21Z" fill="#c89850" />
          <path d="M120 44c-4-3-1-7 0-10 3 5 4 7 0 10Z" fill="#f6eddb" />
        </svg>
        <p className="small-label">You're invited to</p>
        <h1 id="invite-title">Dinner<em>night.</em></h1>
        <p className="ampersand" aria-hidden="true">— &amp; —</p>
        <p className="description">Making it to this page means you're personally invited. Join us for an evening of good food, great company, and conversations that last a little longer.</p>
        <p className="details">For RSVP details, continue with Google.</p>
        <div className="rule" aria-hidden="true">✦</div>
        <a className="google" href="#" id="continue-link" data-testid="link-continue-google"
          onClick={(e) => { e.preventDefault(); setShown(true); }}>
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65Z" />
            <path fill="#FBBC05" d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19A23.85 23.85 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19Z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
          </svg>
          Continue with Google
        </a>
        <p className="note">Just an invitation. No sign-in required.</p>
        <p className="footer">Come hungry. Stay a little longer.</p>
        <p className="message" id="invite-message" role="status" hidden={!shown} data-testid="status-invite-message">You're in good company. The dinner details will follow — no Google sign-in is connected to this invitation.</p>
      </article>
    </main>
  );
}

export default App;
