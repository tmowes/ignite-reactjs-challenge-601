import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateAreas: `"nav main"`,
  gridTemplateColumns: '14.5rem 1fr',
  gridTemplateRows: '1fr',
  gridGap: '$2',

  height: '100%',
  margin: '$5',
})

export const Navbar = styled('nav', {
  gridArea: 'nav',
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100dvh - 2.5rem)',
  background: '$gray700',
  backgroundImage: `radial-gradient(closest-corner circle at 10% 90%, #255D6A -250%, transparent 400%),
                    radial-gradient(closest-corner circle at 90% 5%, #2A2879 -150%, transparent 300%),
                    radial-gradient(closest-corner circle at 95% 50%, #2A2879 -100%, transparent 150%),
                    radial-gradient(closest-corner circle at 5% 5%, #255D6A -50%, transparent 500%)`,
  borderRadius: '$md',
})

export const Main = styled('main', {
  gridArea: 'main',
  width: '100%',
})
