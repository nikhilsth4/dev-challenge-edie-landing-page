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

export const InputWithBtn = () => {
  return (
    <>
      <Text
        fontWeight="500"
        fontSize={["10px", null, null, "14px"]}
        color="gray.300"
        lineHeight={["15px", null, null, "21px"]}
        mb={[null, null, null, 2]}
      >
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
          color="gray.500"
          _placeholder={{
            fontWeight: 500,
            color: "gray.300",
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
    </>
  )
}

const Hero = () => {
  return (
    <Box mt={[24, null, null, 40]} mx={[3, null, null, 14]}>
      <Box
        maxW={["272px", null, null, "542px"]}
        ml={[8, null, null, 64]}
        mb={[4, null, null, 13]}
      >
        <Text
          color="primary"
          fontSize={["lg", null, null, "28px"]}
          fontWeight={500}
        >
          Unhappy with your website?
        </Text>
        <Heading as="h1" size="5xl">
          We create beautiful <br />
          and fast web services
        </Heading>
      </Box>
      <Box
        minH={["146px", null, null, "354px"]}
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

      <VStack
        spacing={[6, null, null, 7]}
        maxW={["272px", null, null, "366px"]}
        mt={[6, null, null, 10]}
        ml={[8, null, null, 64]}
        align="flex-start"
      >
        <Heading as="h1" size="5xl">
          Story, emotion <br /> and purpose
        </Heading>
        <Text
          color="gray.500"
          fontWeight="400"
          fontSize={["xs", null, null, "18px"]}
          lineHeight={["18px", null, null, "27px"]}
        >
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </Text>
        <Box w="full">
          <InputWithBtn />
        </Box>
      </VStack>
    </Box>
  )
}

export default Hero
