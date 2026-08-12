import React, { useState, useEffect, Component } from 'react';
import Header from './components/Header';
import HeroIntroSection from './components/HeroIntroSection';
import SpaceNewsView from './components/SpaceNewsView';
import GlobeViewer from './components/GlobeViewer';
import LaunchSimulatorView from './components/LaunchSimulatorView';
import SpaceXLaunchesView from './components/SpaceXLaunchesView';
import StarlinkAnalyticsView from './components/StarlinkAnalyticsView';
import RocketFleetView from './components/RocketFleetView';
import FutureProjectsView from './components/FutureProjectsView';
import { spacexApi } from './services/spacexApi';
import { satelliteApi } from './services/satelliteApi';

// Error Boundary to prevent blank screen crashes
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorInfo: error ? error.toString() : 'Unknown Error' };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an exception:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#000000', color: '#ffffff', fontFamily: 'monospace', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ff6b00' }}>⚠️ TELEMETRY RECOVERY MODE ACTIVE</h2>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>WebGL 3D Context Error Recovered: {this.state.errorInfo}</p>
          <button
            className="btn-primary"
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
          >
            Re-initialize Dashboard
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [satellites, setSatellites] = useState([]);
  const [nextLaunch, setNextLaunch] = useState(null);
  const [launches, setLaunches] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [selectedSat, setSelectedSat] = useState(null);
  const [simSpeed, setSimSpeed] = useState(1);
  const [loading, setLoading] = useState(true);

  // Load telemetry data from SpaceX API & CelesTrak / Satellite propagators
  const loadData = async () => {
    setLoading(true);
    try {
      const results = await Promise.allSettled([
        satelliteApi.fetchLiveSatellites('starlink'),
        spacexApi.getNextLaunch(),
        spacexApi.getPastLaunches(40),
        spacexApi.getRockets()
      ]);

      const satsData = results[0].status === 'fulfilled' && results[0].value ? results[0].value : satelliteApi.generateSyntheticSatellites('starlink');
      const nextL = results[1].status === 'fulfilled' && results[1].value ? results[1].value : spacexApi.getFallbackNextLaunch();
      const pastL = results[2].status === 'fulfilled' && results[2].value ? results[2].value : spacexApi.getFallbackPastLaunches();
      const rocketsData = results[3].status === 'fulfilled' && results[3].value ? results[3].value : spacexApi.getFallbackRockets();

      setSatellites(satsData || []);
      setNextLaunch(nextL || spacexApi.getFallbackNextLaunch());
      setLaunches(pastL || []);
      setRockets(rocketsData || []);
    } catch (err) {
      console.error("Data load error:", err);
      setSatellites(satelliteApi.generateSyntheticSatellites('starlink'));
      setNextLaunch(spacexApi.getFallbackNextLaunch());
      setLaunches(spacexApi.getFallbackPastLaunches());
      setRockets(spacexApi.getFallbackRockets());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          totalSatellites={satellites ? satellites.length : 0}
          nextLaunch={nextLaunch}
          onRefresh={loadData}
        />

        <main className="main-viewport">
          {loading ? (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000000', color: '#ffffff' }}>
              <div style={{ fontSize: '1.6rem', fontFamily: 'Outfit, sans-serif', fontWeight: '800', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="pulse-dot" style={{ width: '12px', height: '12px' }}></span>
                INITIALIZING SPACEX ORBITAL TELEMETRY...
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#94a3b8', marginTop: '12px' }}>
                Acquiring CelesTrak TLE Orbits & SpaceX Launch Manifest
              </div>
            </div>
          ) : (
            <>
              {activeTab === 'home' && (
                <div style={{ width: '100%', height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <HeroIntroSection
                    onNavigate={setActiveTab}
                    totalSatellites={satellites?.length || 0}
                    nextLaunch={nextLaunch}
                  />
                </div>
              )}

              {activeTab === 'news' && (
                <div style={{ width: '100%', height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <SpaceNewsView />
                </div>
              )}

              {activeTab === 'globe' && (
                <GlobeViewer
                  satellites={satellites || []}
                  selectedSat={selectedSat}
                  setSelectedSat={setSelectedSat}
                  simSpeed={simSpeed}
                  setSimSpeed={setSimSpeed}
                />
              )}

              {activeTab === 'simulator' && (
                <LaunchSimulatorView nextLaunch={nextLaunch} />
              )}

              {activeTab === 'launches' && (
                <div style={{ width: '100%', height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <SpaceXLaunchesView
                    nextLaunch={nextLaunch}
                    launches={launches || []}
                    onSelectLaunch={l => console.log('Selected launch:', l)}
                  />
                </div>
              )}

              {activeTab === 'starlink' && (
                <div style={{ width: '100%', height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <StarlinkAnalyticsView
                    satellites={satellites || []}
                    onFilterStarlink={() => setActiveTab('globe')}
                  />
                </div>
              )}

              {activeTab === 'rockets' && (
                <div style={{ width: '100%', height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <RocketFleetView rockets={rockets || []} />
                </div>
              )}

              {activeTab === 'future' && (
                <div style={{ width: '100%', height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <FutureProjectsView />
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </ErrorBoundary>
  );
}
