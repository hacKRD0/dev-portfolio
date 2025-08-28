import { Container, Box } from './shared';

export default function Terminal({
  command = '> building robust, scalable apps → keshava.rajavaram.com',
}: { command?: string }) {
  return (
    <Container bg="#0D0F14">
      <Box style={{ flexDirection: 'column', gap: 20, margin: 'auto', width: '100%' }}>
        <Box style={{ gap: 8, alignItems: 'center' }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: '#FF5F56' }} />
          <div style={{ width: 12, height: 12, borderRadius: 12, background: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: 12, background: '#27C93F' }} />
        </Box>
        <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 44, lineHeight: 1.2 }}>
          {command}
        </div>
      </Box>
    </Container>
  );
}
