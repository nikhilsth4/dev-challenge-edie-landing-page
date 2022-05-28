import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import NextImage from "next/image"

const Hero = () => {
  return (
    <Box mt={24} mx={3}>
      <Box maxW="272px" ml={10} mb={4}>
        <Text color="primary" fontSize="12px" fontWeight={500}>
          Unhappy with your website?
        </Text>
        <Heading as="h1" size="5xl">
          We create beautiful <br />
          and fast web services
        </Heading>
      </Box>
      <Box
        minH="146px"
        position="relative"
        overflow="hidden"
        borderRadius={"18px"}
      >
        <NextImage
          src="/images/heroimage.jpg"
          alt=" hero image"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <VStack spacing="6" maxW="272px" mt={6} ml={10} align="flex-start">
        <Heading as="h1" size="5xl">
          Story, emotion <br /> and purpose
        </Heading>
        <Text color="gray.400" fontWeight="400" fontSize="xs" lineHeight="18px">
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </Text>
        <Box>
          <Text fontWeight="500" fontSize="10px" color="gray.300" lineHeight="15px">
            Want us to contact you?
          </Text>
          <InputGroup>
            <Input
              pr="76px"
              pl={5}
              pt={4}
              pb="6px"
              placeholder="Email"
              variant="unstyled"
              borderRadius="12px"
              bg="gray.100"
              height="48px"
              color="gray.400"
              _placeholder={{
                fontWeight: 500,
                color: "gray.500",
                lineHeight: "21px",
              }}
            />
            <InputRightElement width="72px" my={1} mr={1}>
              <Button
                h="1.75rem"
                size="sm"
                bg="primary"
                px={5}
                py={3}
                height="40px"
                fontSize="14px"
                fontWeight={500}
                color="white"
              >
                Join
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </VStack>
    </Box>
  )
}

export default Hero
