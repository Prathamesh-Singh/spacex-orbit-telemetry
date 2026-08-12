import React from 'react';
import { Rocket, Globe, Sparkles } from 'lucide-react';

export default function HeroIntroSection({ onNavigate, totalSatellites, nextLaunch }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: '100vh',
      background: '#000000',
      color: '#ffffff',
      zIndex: 10,
      WebkitOverflowScrolling: 'touch',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Full-Height Hero Banner Section using High-Res Starship Mars Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        flex: 1,
        minHeight: '100vh',
        backgroundColor: '#000000',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.55) 60%, #000000 100%), url('/assets/starship_mars_hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justify: 'center',
        padding: '80px 6%',
        boxSizing: 'border-box'
      }}>
        {/* Top Floating Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(5, 5, 8, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '6px 14px',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '2px',
          color: '#00f0ff',
          width: 'fit-content',
          marginBottom: '20px'
        }}>
          <span className="pulse-dot"></span> SPACEX ORBITAL TELEMETRY HUB // MULTIPLANETARY MISSION ARCHITECTURE
        </div>

        {/* Hero Title & Subtitle */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.4rem, 6vw, 5.2rem)',
          fontWeight: '900',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          lineHeight: '1.05',
          margin: '0 0 20px 0',
          maxWidth: '960px',
          color: '#ffffff',
          textShadow: '0 10px 30px rgba(0,0,0,0.95)'
        }}>
          MAKING HUMANITY MULTIPLANETARY.
        </h1>

        <p style={{
          fontSize: 'clamp(1.0rem, 1.6vw, 1.25rem)',
          color: '#cbd5e1',
          maxWidth: '760px',
          lineHeight: '1.6',
          marginBottom: '36px',
          fontWeight: '300',
          textShadow: '0 4px 12px rgba(0,0,0,0.9)'
        }}>
          Real-time SGP4 orbital tracking of 6,800+ Earth satellites, mission-synced Falcon 9 & Starship 3D launch telemetry, and SpaceX deep space Mars colonization roadmaps.
        </p>

        {/* Call to Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '14px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <button
            className="btn-primary"
            style={{
              padding: '16px 28px',
              fontSize: '0.92rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontWeight: '700',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              justify: 'center',
              gap: '10px'
            }}
            onClick={() => onNavigate('globe')}
          >
            <Globe size={18} /> LAUNCH 3D ORBIT TRACKER
          </button>

          <button
            className="btn-secondary"
            style={{
              padding: '16px 28px',
              fontSize: '0.92rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontWeight: '700',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              justify: 'center',
              gap: '10px'
            }}
            onClick={() => onNavigate('simulator')}
          >
            <Rocket size={18} /> SIMULATE STARSHIP FLIGHT
          </button>

          <button
            className="btn-secondary"
            style={{
              padding: '16px 28px',
              fontSize: '0.92rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontWeight: '700',
              borderRadius: '4px',
              borderColor: 'rgba(255, 215, 0, 0.45)',
              color: '#ffd700',
              display: 'inline-flex',
              alignItems: 'center',
              justify: 'center',
              gap: '10px'
            }}
            onClick={() => onNavigate('future')}
          >
            <Sparkles size={18} color="#ffd700" /> EXPLORE MARS ROADMAP
          </button>
        </div>
      </div>
    </div>
  );
}
