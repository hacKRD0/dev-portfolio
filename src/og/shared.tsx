import * as React from 'react';

export const OG = { width: 1200, height: 630 }; // FB recommends 1200×630. 
// NOTE: X/Twitter prefers 2:1; you can render a second 1200×600 if you want. 

export const Box: React.FC<React.PropsWithChildren<{ style?: React.CSSProperties }>> = ({ style, children }) => (
  <div style={{ display: 'flex', boxSizing: 'border-box', ...style }}>{children}</div>
);

export const Container: React.FC<React.PropsWithChildren<{ pad?: number; bg?: string }>> = ({
  pad = 48,
  bg = '#0B1020',
  children,
}) => (
  <Box
    style={{
      width: OG.width,
      height: OG.height,
      padding: pad,
      background: bg,
      color: '#E6E9F5',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}
  >
    {children}
  </Box>
);

export const Name = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 86, fontWeight: 800, lineHeight: 1.05 }}>{children}</div>
);

export const Title = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 40, fontWeight: 600, opacity: 0.92 }}>{children}</div>
);

export const Sub = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 28, fontWeight: 500, opacity: 0.8 }}>{children}</div>
);

export const Tag = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 24,
      fontWeight: 600,
      padding: '8px 14px',
      borderRadius: 12,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.12)',
    }}
  >
    {children}
  </div>
);
