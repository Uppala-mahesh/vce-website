/* Tweaks — VCE Redesign */
const { useState, useEffect } = React;

const VCE_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "A",
  "accentColor": "#AB5B23",
  "showMottoRail": true,
  "displayFont": "fraunces"
}/*EDITMODE-END*/;

// Companion warm-tint per accent (approx. 25% lighter, kept warm)
const WARM_MAP = {
  "#AB5B23": "#C77A44",
  "#8C2C2C": "#B24747",
  "#2F5D3A": "#4A7A54",
  "#334E7A": "#5871A0"
};

function applyAccent(hex) {
  const root = document.documentElement;
  root.style.setProperty('--copper', hex);
  root.style.setProperty('--copper-warm', WARM_MAP[hex] || hex);
}

function applyDisplayFont(f) {
  const root = document.documentElement;
  const map = {
    fraunces: '"Fraunces", "Times New Roman", Georgia, serif',
    playfair: '"Playfair Display", "Times New Roman", Georgia, serif',
    plex:     '"IBM Plex Serif", "Times New Roman", Georgia, serif',
    dm:       '"DM Serif Display", "Times New Roman", Georgia, serif'
  };
  root.style.setProperty('--f-display', map[f] || map.fraunces);
}

function applyMottoRail(show) {
  const el = document.querySelector('.motto-rail');
  if (el) el.style.display = show ? '' : 'none';
}

function applyHeroVariant(v) {
  document.querySelectorAll('.hero[data-variant]').forEach(h => {
    h.classList.toggle('variant-hidden', h.dataset.variant !== v);
  });
}

function VCETweaks() {
  const [t, setTweak] = useTweaks(VCE_DEFAULTS);

  useEffect(() => { applyHeroVariant(t.heroVariant); }, [t.heroVariant]);
  useEffect(() => { applyAccent(t.accentColor); }, [t.accentColor]);
  useEffect(() => { applyMottoRail(t.showMottoRail); }, [t.showMottoRail]);
  useEffect(() => { applyDisplayFont(t.displayFont); }, [t.displayFont]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Hero Variant">
        <TweakRadio
          value={t.heroVariant}
          onChange={(v) => setTweak('heroVariant', v)}
          options={[
            { value: 'A', label: 'Editorial' },
            { value: 'B', label: 'Archival' },
            { value: 'C', label: 'Cinematic' }
          ]}
        />
        <div style={{ fontSize: 11, color: '#5B6472', marginTop: 8, lineHeight: 1.5 }}>
          <b>Editorial</b> — split photo, huge Fraunces headline<br/>
          <b>Archival</b> — title-page treatment with facility thumbs<br/>
          <b>Cinematic</b> — full-bleed campus photo, ink overlay
        </div>
      </TweakSection>

      <TweakSection title="Accent Palette">
        <TweakColor
          label="Accent"
          value={t.accentColor}
          onChange={(v) => setTweak('accentColor', v)}
          options={['#AB5B23', '#8C2C2C', '#2F5D3A', '#334E7A']}
        />
        <div style={{ fontSize: 11, color: '#5B6472', marginTop: 8, lineHeight: 1.5 }}>
          Copper (default) · Crimson · Forest · Indigo
        </div>
      </TweakSection>

      <TweakSection title="Display Serif">
        <TweakSelect
          value={t.displayFont}
          onChange={(v) => setTweak('displayFont', v)}
          options={[
            { value: 'fraunces',  label: 'Fraunces (default)' },
            { value: 'playfair',  label: 'Playfair Display' },
            { value: 'plex',      label: 'IBM Plex Serif' },
            { value: 'dm',        label: 'DM Serif Display' }
          ]}
        />
      </TweakSection>

      <TweakSection title="Options">
        <TweakToggle
          label="Vertical motto rail (left edge)"
          value={t.showMottoRail}
          onChange={(v) => setTweak('showMottoRail', v)}
        />
      </TweakSection>

      <TweakSuggestionBar suggestions={[
        "Make the ledger scroll instead of fixed",
        "Try a warmer paper background",
        "Reduce the hero headline size",
        "Add a search bar to the header",
        "Make the departments filter default to CSE"
      ]} />
    </TweaksPanel>
  );
}

// Load Playfair + DM Serif + Plex Serif for font tweaks
(function loadExtraFonts() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Serif:wght@300;400;500&display=swap';
  document.head.appendChild(link);
})();

const root = ReactDOM.createRoot(document.getElementById('tweaks-root'));
root.render(<VCETweaks />);
