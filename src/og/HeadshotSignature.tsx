import * as React from 'react';
import { Container, Name, Sub, Box } from './shared';

export default function HeadshotSignature({
  name = 'Keshava Rajavaram',
  role = 'AI Engineering · Systems · Full-Stack Developer',
  headshotUrl = 'https://keshava.rajavaram.com/assets/dp.jpeg', // place file in /public/headshot.jpg
}: { name?: string; role?: string; headshotUrl?: string }) {
  return (
    <Container>
      <Box style={{ gap: 28, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <img src={headshotUrl} width={220} height={220} style={{ borderRadius: '50%', objectFit: 'cover' }} />
        <Box style={{ flexDirection: 'column', gap: 16 }}>
          <Name>{name}</Name>
          <Sub>{role}</Sub>
          <Sub>keshava.rajavaram.com</Sub>
        </Box>
      </Box>
    </Container>
  );
}
