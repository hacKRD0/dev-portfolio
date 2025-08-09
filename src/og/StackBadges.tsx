import * as React from 'react';
import { Container, Title, Box, Tag } from './shared';

export default function StackBadges({
  tech = ['React', 'Node', 'Go', 'PostgreSQL', 'AWS', 'GCP'],
}: { tech?: string[] }) {
  return (
    <Container>
      <Box style={{ flexDirection: 'column', gap: 24, width: '100%', justifyContent: 'center' }}>
        <Title>Keshava Rajavaram</Title>
        <Box style={{ gap: 12, flexWrap: 'wrap', maxWidth: 1000 }}>
          {tech.map((t, i) => <Tag key={i}>{t}</Tag>)}
        </Box>
      </Box>
    </Container>
  );
}
