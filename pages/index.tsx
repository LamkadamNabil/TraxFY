import { Box, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { useMe } from '../lib/hooks'
import prisma from '../lib/prisma'
import GradientLayout from './components/gradientLayout'
const Home = ({ artists }) => {
  //const {user} =useMe() ;
  console.log(artists);
  return (
    <GradientLayout
    roundImage
      color="pink"
      subtitle="profile"
      title="SAID AABILLA "
      description="Exclusive content! You can now listen to my podcasts on spotify!"
      image="said2.jpeg"
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
                  src="said2.jpeg"
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

