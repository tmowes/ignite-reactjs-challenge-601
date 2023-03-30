import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto 0 4rem',
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

export const SearchContainer = styled('div', {
  width: '45%',
  marginLeft: 'auto',
})

export const Tags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: '$3',
  marginBottom: '$10',
})

export const BooksGrid = styled('div', {
  display: 'grid',
  height: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridAutoRows: 188,
  gap: '$5',
  overflowY: 'auto',
  paddingBottom: 40,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
