import { Container, Title, Sub, Box, Tag } from './shared';

const Cell = ({ title }: { title: string }) => (
  <Box
    style={{
      flex: 1,
      minWidth: 0,
      minHeight: 0,
      borderRadius: 24,
      padding: 28,
      border: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(255,255,255,0.04)',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      fontSize: 34,
      fontWeight: 700,
    }}
  >
    {title}
  </Box>
);

export default function ProjectsGrid({
  items = ['Pollyglot', 'LambdaVision', 'StockCentral', 'MovieFlex'],
}: { items?: string[] }) {
  return (
    <Container>
      <Box style={{ position: 'absolute', top: 48, right: 48, gap: 12 }}>
        <Tag>Projects</Tag>
      </Box>
      <Box style={{ flexDirection: 'column', gap: 24, width: '100%' }}>
        <Title>Selected Work</Title>
        <Sub>AI · Systems · Product Engineering</Sub>
        <Box style={{ gap: 24, flexWrap: 'wrap' }}>
          {items.slice(0, 4).map((t, i) => <Cell key={i} title={t} />)}
        </Box>
      </Box>
    </Container>
  );
}
