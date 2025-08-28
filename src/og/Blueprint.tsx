import { Container, Box, Title, Sub } from './shared';

const Node = ({ label }: { label: string }) => (
  <Box style={{
    padding: '18px 22px',
    border: '2px solid rgba(124,240,255,0.8)',
    color: '#CFF8FF',
    borderRadius: 14,
    fontSize: 26,
    fontWeight: 700,
    background: 'rgba(10,40,60,0.35)',
    boxShadow: '0 0 0 2px rgba(124,240,255,0.15) inset',
  }}>
    {label}
  </Box>
);

export default function Blueprint() {
  return (
    <Container bg="#041321">
      <Box style={{ flexDirection: 'column', gap: 24, width: '100%' }}>
        <Title>System Architecture</Title>
        <Sub>Frontend ↔ API ↔ DB · Queues · Caching</Sub>
        <Box style={{ gap: 40, alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
          <Node label="Frontend" />
          <div style={{ width: 80, height: 4, background: 'rgba(124,240,255,0.8)' }} />
          <Node label="API" />
          <div style={{ width: 80, height: 4, background: 'rgba(124,240,255,0.8)' }} />
          <Node label="DB" />
        </Box>
      </Box>
    </Container>
  );
}
