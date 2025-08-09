import * as React from 'react';
import { Container, Title, Sub, Box } from './shared';

const sample = `func handler(w http.ResponseWriter, r *http.Request) {
  // scalable systems, clean APIs
  log.Println("hello world")
}`;

export default function CodeOverlay({
  heading = 'Shipping scalable systems',
  text = 'AI · APIs · Observability',
  code = sample,
}: { heading?: string; text?: string; code?: string }) {
  return (
    <Container>
      <Box style={{ position: 'absolute', inset: 0, opacity: 0.16, padding: 48 }}>
        <pre style={{
          whiteSpace: 'pre-wrap',
          fontSize: 22,
          lineHeight: 1.4,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        }}>{code}</pre>
      </Box>
      <Box style={{ flexDirection: 'column', gap: 18, justifyContent: 'center', width: '100%' }}>
        <Title>{heading}</Title>
        <Sub>{text}</Sub>
      </Box>
    </Container>
  );
}
