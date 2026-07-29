import { KsBadge } from '@byted-keystone/react';
import {
  KsIconMessage,
  KsIconLayout,
  KsIconNotes,
  KsIconChart,
  KsIconSend,
  KsIconPeople,
  KsIconSearch,
  KsIconGear,
} from '@fe-infra/keystone-icons-react';

const topIcons = [
  { key: 'inbox', icon: <KsIconLayout size="20" />, badge: 8 },
  { key: 'knowledge', icon: <KsIconNotes size="20" /> },
  { key: 'reports', icon: <KsIconChart size="20" /> },
  { key: 'outbound', icon: <KsIconSend size="20" /> },
  { key: 'contacts', icon: <KsIconPeople size="20" /> },
];

/** The far-left application icon rail (workspace-level navigation). */
export default function IconRail() {
  return (
    <nav className="icon-rail" aria-label="Workspace">
      <div className="rail-logo" title="Fin">
        <KsIconMessage size="18" />
      </div>
      {topIcons.map((it) =>
        it.badge ? (
          <KsBadge key={it.key} count={it.badge}>
            <div className="rail-icon">{it.icon}</div>
          </KsBadge>
        ) : (
          <div className="rail-icon" key={it.key}>
            {it.icon}
          </div>
        )
      )}
      <div className="rail-spacer" />
      <div className="rail-icon">
        <KsIconSearch size="20" />
      </div>
      <div className="rail-icon">
        <KsIconGear size="20" />
      </div>
      <div className="rail-icon" style={{ marginTop: 4 }}>
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: '50%',
            background: 'linear-gradient(135deg,#8078f6,#31bdb8)',
          }}
        />
      </div>
    </nav>
  );
}
