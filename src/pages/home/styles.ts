import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 20.25rem',
  gridGap: '$2',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  margin: '4rem 0 $10',
  svg: {
    color: '$green100',
  },
  h3: {
    color: '$gray100',
  },
})

export const RecentViewsSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100dvw - 20.25rem - 14.5rem - 8rem)',
  height: 'auto',
  margin: '0 auto',
})

export const TrendingSection = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '6.625rem',
  maxWidth: '20.25rem',
})

export const TrendingList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  listStyle: 'none',
})
