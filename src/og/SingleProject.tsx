import * as React from 'react';
import { Container, Title, Sub, Box, Tag } from './shared';

export default function SingleProject({
  project = 'Pollyglot',
  oneLiner = 'Realtime EN→ES/FR/JA translator',
}: { project?: string; oneLiner?: string }) {
  return (
    <Container>
      <Box style={{ gap: 18, position: 'absolute', top: 48, right: 48 }}>
        <Tag>Case Study</Tag>
      </Box>
      <Box style={{ flexDirection: 'column', gap: 24, justifyContent: 'center', width: '100%' }}>
        <Title>{project}</Title>
        <Sub>{oneLiner}</Sub>
        <Sub>keshava.rajavaram.com/projects/{project.toLowerCase()}</Sub>
      </Box>
    </Container>
  );
}
