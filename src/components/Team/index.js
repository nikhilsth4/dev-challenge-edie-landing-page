import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import Container from "../Container"
import NextImage from "next/image"

const Teams = () => {
  return (
    <Container>
      <Flex
        flexDirection={["column", null, null, "row"]}
        maxW={[null, null, null, "800px", "1106px"]}
        margin="auto"
        alignItems="center"
      >
        <Box justifySelf="center">
          <Box maxW={[null, null, null, "280px"]}>
            <Text
              color="orange"
              fontWeight={500}
              fontSize="18px"
              lineHeight="27px"
            >
              Meet the team
            </Text>
            <Heading as="h2" size="4xl">
              We are chilled and a laidback team
            </Heading>
            <Text
              mt={3}
              fontWeight={400}
              fontSize="16px"
              lineHeight="24px"
              color="gray.500"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </Box>
        <Flex
          justify={["space-evenly", null, null, "flex-end"]}
          align="center"
          gap={[2, null, null, 6]}
          mt={[9, null, null, 0]}
          flex={1}
        >
          <TeamImage src="/images/person3.png" />
          <Box>
            <Flex flexDirection="column" gap={[2, null, null, 6]}>
              <TeamImage src="/images/person1.png" />
              <TeamImage src="/images/person2.png" />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}

const TeamImage = ({ src }) => (
  <Box
    position="relative"
    overflow="hidden"
    borderRadius="24px"
    height={["168px", null, null, "220px", "260px"]}
    width={["162px", null, null, "220px", "260px"]}
  >
    <NextImage src={src} alt=" Team image" layout="fill" objectFit="cover" />
  </Box>
)

export default Teams
