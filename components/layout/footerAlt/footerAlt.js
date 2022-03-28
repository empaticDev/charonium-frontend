import tw from 'twin.macro'

const Container = tw.div`
    bg-blue-500
    py-10
`

const Title = tw.h1`
  text-2xl
`

export default function FooterAlt() {
  return (
    <Container>
          <Title>this footer was styled with emotion</Title>
    </Container>
  )
}