import { Container, Name, Sub, Box } from './shared';

export default function Nameplate({
  name = 'Keshava Rajavaram',
  tagline = 'AI Engineer · Full-Stack Developer',
}: { name?: string; tagline?: string }) {
  return (
    <Container>
      <Box style={{ flexDirection: 'column', gap: 24, alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
        <Name>{name}</Name>
        <Sub>{tagline}</Sub>
        <Box style={{ height: 4, background: 'linear-gradient(90deg,#7C90FF,#7CF5FF)', width: 360, borderRadius: 4 }} />
        <Sub>keshava.rajavaram.com</Sub>
      </Box>
    </Container>
  );
}
