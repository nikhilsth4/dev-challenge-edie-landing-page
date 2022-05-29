import { Box, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react"
import React from "react"
import NextImage from "next/image"
import { InputWithBtn } from "../Hero"
import NextLink from "next/link"

const ContactLink = ({ href, name }) => (
  <NextLink href={href} passHref>
    <Link fontWeight={400} fontSize="18px" color="white" lineHeight="36px">
      <>{name}</>
    </Link>
  </NextLink>
)
const Contact = () => {
  return (
    <Box mt="102px" bg="darkBlue" pt={[9]} pl={[10]} pb={6}>
      <Box maxW={[null, null, null, "800px", "1106px"]} margin="auto">
        <Flex
          flexDirection={["column", null, null, "row"]}
          gap={16}
          justify={[null, null, null, "space-between"]}
        >
          <Box>
            <VStack align="flex-start" mt={2}>
              <ContactLink href="/" name="Home" />
              <ContactLink href="/" name="Services" />
              <ContactLink href="/" name="Our Works" />
              <ContactLink href="/" name="Clients" />
              <ContactLink href="/" name="Contact" />
            </VStack>
          </Box>
          <Box>
            <Heading
              as="h1"
              size={"5xl"}
              fontFamily="mono"
              fontWeight="extrabold"
              color="white"
            >
              Edie
            </Heading>
            <Flex gap={3}>
              <NextImage
                src="/images/icons/instagram.svg"
                alt="social"
                width="24px"
                height="24px"
              />
              <NextImage
                src="/images/icons/linkedin.svg"
                alt="social"
                width="24px"
                height="24px"
              />
              <NextImage
                src="/images/icons/twitter.svg"
                alt="social"
                width="24px"
                height="24px"
              />
            </Flex>
          </Box>
          <Box maxW="292px">
            <InputWithBtn />
          </Box>
        </Flex>
        <Text
          mt={28}
          color="white"
          fontSize="14px"
          lineHeight="18px"
          align="center"
        >
          created by
          <NextLink href="https://github.com/nikhilsth4" passHref>
            <Link isExternal> @nikhilsth4 </Link>
          </NextLink>
          - devChallenges.io
        </Text>
      </Box>
    </Box>
  )
}

export default Contact
