import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import React from "react"
import Container from "../Container"
import NextImage from "next/image"

const Clients = () => {
  return (
    <Container>
      <Heading as="h2" size="5xl">
        “Fast and outstanding results. Edie understands their customer’s needs.
        They have a young and talented team.”
      </Heading>
      <Flex mt={10} gap={4} align="center">
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="12px"
          height="62px"
          width="62px"
        >
          <NextImage
            src="/images/person4.png"
            alt="Client image"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <VStack align="flex-start">
          <Text fontWeight={500} fontSize="xl" lineHeight="36px">
            Carlos Tran
          </Text>
          <Text
            fontWeight={500}
            fontSize="lg"
            lineHeight="27px"
            color="gray.400"
          >
            The Decorate Gatsby
          </Text>
        </VStack>
      </Flex>
    </Container>
  )
}

export default Clients
