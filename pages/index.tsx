import { Box, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import prisma from '../lib/prisma'
import GradientLayout from './components/gradientLayout'
const Home = ({ artists }) => {
  console.log(artists);
  return (
    <GradientLayout
    roundImage
      color="purple"
      subtitle="profile"
      title="SAID AABILLA "
      description="Exclusive content! You can now listen to my podcasts on spotify!"
      image="https://avatars.githubusercontent.com/u/81530466?v=4"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://avatars.githubusercontent.com/u/81530466?v=4"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home

