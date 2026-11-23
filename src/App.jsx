import Header from './components/Header.jsx';
import StatCard from './components/StatCard.jsx';
import UserList from './components/UserList.jsx';
import WeatherPlaceholder from './components/WeatherPlaceholder.jsx';
import { sampleUsers } from './data/users.js';

export default function App() {
  return (
    <div className="app-shell">
      <Header title="Open Source Studio" subtitle="Week 13 · React Mini Dashboard" />
      <main className="dashboard">
        <section className="hero">
          <p className="hero-kicker">OPEN SOURCE STUDIO / WEEK 13 / syggggggg</p>
          <h1>Build. Analyze. Deploy. Connect.</h1>
          <p>
            One small React project for GitHub collaboration, component analysis,
            Vercel deployment and REST API integration.
          </p>
          <span className="hero-tag">CLASS PRACTICE ONLY · NO SUBMISSION</span>
        </section>

        <section className="stats-grid" aria-label="Dashboard summary">
          <StatCard icon="👥" label="Sample Users" value={sampleUsers.length} detail="Local JavaScript array" />
          <StatCard icon="⚙️" label="React Hooks" value="useState" detail="Search + useRef focus" />
          <StatCard icon="🌐" label="REST API" value="LAB 5–7" detail="Axios integration coming next" />
        </section>

        <div className="content-grid">
          <UserList initialUsers={sampleUsers} />
          <WeatherPlaceholder />
        </div>
        <div className="mini-section">
          <strong>Learning path: GitHub → Install → Analyze → Deploy → Axios → API UI → Weather</strong>
          <span>LAB results are not submitted. Apply the skills to your own team project.</span>
        </div>
      </main>
    </div>
  );
}
