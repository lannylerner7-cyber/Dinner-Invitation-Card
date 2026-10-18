import { DesignSystemBrowser } from './preview/DesignSystemBrowser';
import { useEffect, useState } from 'react';

function App() {
  const [dark, setDark] = useState(() => new URLSearchParams(window.location.search).get('theme') === 'dark');
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); }, [dark]);
  return <><div className="flex justify-end border-b bg-background px-6 py-3 text-foreground"><button className="border px-4 py-2 text-sm focus-visible:outline-2" aria-pressed={dark} onClick={() => setDark(!dark)}>{dark ? 'Dark (derived) — switch to light' : 'Light (source) — switch to dark'}</button></div><DesignSystemBrowser /></>;
}

export default App;
