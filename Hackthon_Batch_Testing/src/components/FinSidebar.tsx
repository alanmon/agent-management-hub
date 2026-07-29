import { useState } from 'react';
import { KsNavItem } from '@byted-keystone/react';
import {
  KsIconChart,
  KsIconNotes,
  KsIconTest,
  KsIconSend,
  KsIconGear,
  KsIconConnect,
  KsIconAutomatedGroup,
  KsIconChevronDown,
  KsIconChevronRight,
  KsIconNewWindow,
} from '@fe-infra/keystone-icons-react';

const analyzeSubItems = [
  { key: 'performance', label: 'Performance' },
  { key: 'ai-insights', label: 'AI Insights' },
  { key: 'conversations', label: 'Conversations', external: true },
  { key: 'unresolved', label: 'Unresolved questions' },
];

/** Product-level "Fin AI Agent" sidebar. */
export default function FinSidebar() {
  const [active, setActive] = useState('test');
  const [analyzeOpen, setAnalyzeOpen] = useState(true);
  const [activeSub, setActiveSub] = useState('');

  return (
    <aside className="fin-sidebar" aria-label="Fin AI Agent">
      <div className="fin-brand">Fin AI Agent</div>

      <div className="fin-nav">
        {/* Analyze (expandable) */}
        <KsNavItem
          value="analyze"
          prefix={<KsIconChart size="18" />}
          suffix={analyzeOpen ? <KsIconChevronDown size="16" /> : <KsIconChevronRight size="16" />}
          onClick={() => setAnalyzeOpen((v) => !v)}
        >
          Analyze
        </KsNavItem>
        {analyzeOpen && (
          <div className="nav-subitems">
            {analyzeSubItems.map((s) => (
              <div
                key={s.key}
                className={`nav-sub ${activeSub === s.key ? 'is-active' : ''}`}
                role="button"
                tabIndex={0}
                onClick={() => setActiveSub(s.key)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveSub(s.key);
                }}
              >
                {s.label}
                {s.external && (
                  <span className="nav-sub-ext">
                    <KsIconNewWindow size="14" />
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        <KsNavItem
          value="train"
          prefix={<KsIconNotes size="18" />}
          suffix={<KsIconChevronRight size="16" />}
          active={active === 'train'}
          onClick={() => setActive('train')}
        >
          Train
        </KsNavItem>

        <KsNavItem
          value="test"
          prefix={<KsIconTest size="18" />}
          active={active === 'test'}
          onClick={() => setActive('test')}
        >
          Test
        </KsNavItem>

        <KsNavItem
          value="deploy"
          prefix={<KsIconSend size="18" />}
          suffix={<KsIconChevronRight size="16" />}
          active={active === 'deploy'}
          onClick={() => setActive('deploy')}
        >
          Deploy
        </KsNavItem>

        <KsNavItem
          value="settings"
          prefix={<KsIconGear size="18" />}
          suffix={<KsIconChevronRight size="16" />}
          active={active === 'settings'}
          onClick={() => setActive('settings')}
        >
          Fin settings
        </KsNavItem>

        <div className="nav-gap" />

        <KsNavItem
          value="workflows"
          prefix={<KsIconConnect size="18" />}
          active={active === 'workflows'}
          onClick={() => setActive('workflows')}
        >
          Workflows
        </KsNavItem>

        <KsNavItem
          value="automations"
          prefix={<KsIconAutomatedGroup size="18" />}
          active={active === 'automations'}
          onClick={() => setActive('automations')}
        >
          Simple automations
        </KsNavItem>
      </div>

      <div className="fin-footer">
        <div className="tutorial-card">
          <div>
            <div className="tutorial-text">
              <b>Tutorials</b>
              <br />
              Learn how to set up and improve Fin →
            </div>
          </div>
          <div className="tutorial-thumb" />
        </div>

        <div className="getset-card">
          <div className="getset-top">
            <span>
              <span className="getset-dot" />
              Get set up
            </span>
            <KsIconChevronDown size="16" />
          </div>
          <div className="getset-body">Set Fin AI Agent live, to resolve issues instantly</div>
        </div>
      </div>
    </aside>
  );
}
