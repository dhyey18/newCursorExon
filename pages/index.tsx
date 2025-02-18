import { Terminal } from '../components/Terminal';

export default function Home() {
  return (
    <Terminal>
      <div className="command">dhyeypatel@Dhyeys-MacBook-Air cursor % npm run dev</div>
      <div className="info">&gt; cursor@0.1.0 dev</div>
      <div className="info">&gt; next dev</div>
      <div className="success">   ▲ Next.js 15.1.7</div>
      <div className="info">   - Local:        <span className="path">http://localhost:3000</span></div>
      <div className="info">   - Network:      <span className="path">http://192.168.0.116:3000</span></div>
      <div className="success"> ✓ Starting...</div>
      <div className="success"> ✓ Ready in <span className="time">1218ms</span></div>
      <div className="info"> ○ Compiling / ...</div>
      <div className="success"> ✓ Compiled / in <span className="time">504ms</span> (630 modules)</div>
      <div className="info"> GET / 200 in <span className="time">660ms</span></div>
      <div className="success"> ✓ Compiled /favicon.ico in <span className="time">53ms</span> (353 modules)</div>
      <div className="info"> GET /favicon.ico 200 in <span className="time">102ms</span></div>
    </Terminal>
  );
} 