import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import React from "react"
import Container from "../Container"
import NextImage from "next/image"

const Services = () => {
  return (
    <Container>
      <Box
        maxW={["272px", null, null, "346px"]}
        ml={[8, null, null, 36]}
        mb={10}
      >
        <Heading as="h2" size="4xl">
          We offer high <br /> demand services
        </Heading>
      </Box>
      <Flex
        flexDirection={["column", null, null, "row"]}
        justify="center"
        gap={[10, null, null, 20]}
      >
        <Card title="UI/UX Design" color="primary" iconName="edit" />
        <Card title="Frontend" color="green" iconName="arrow" />
        <Card title="Backend" color="orange" iconName="storage" />
      </Flex>
    </Container>
  )
}

const Card = ({ title, color, iconName }) => {
  return (
    <Box
      pt={12}
      px={8}
      pb={10}
      _hover={{
        cursor: "pointer",
        boxShadow: "0px 10px 30px rgba(51, 51, 51, 0.1)",
      }}
      maxW="340px"
    >
      <CardIcon color={color} iconName={iconName} />
      <Heading as="h2" fontSize="24px" fontWeight={700} mt={9}>
        {title}
      </Heading>
      <Text
        mt="24px"
        fontSize="16px"
        fontWeight={400}
        lineHeight="24px"
        color="gray.500"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac
        nulla consequat aliquet id quis turpis.
      </Text>
      <Button
        bg="gray.200"
        mt="30px"
        color="gray.400"
        fontWeight={500}
        borderRadius="12px"
        py="9px"
        px="12px"
      >
        Get Started
      </Button>
    </Box>
  )
}
const CardIcon = ({ color, iconName }) => {
  return (
    <Flex
      w="68px"
      h="68px"
      bg={color}
      borderRadius="16px"
      justify="center"
      align="center
    "
    >
      {iconName === "edit" && <Icon src="/images/icons/edit.svg" />}
      {iconName === "arrow" && (
        <>
          <Icon src="/images/icons/arrow-left.svg" h="16px" w="14px" />
          <Icon src="/images/icons/arrow-right.svg" h="16px" w="14px" />
        </>
      )}
      {iconName === "storage" && (
        <Icon src="/images/icons/storage.svg" w="30px" h="24px" />
      )}
    </Flex>
  )
}

const Icon = ({ src, h = "28px", w = "28px" }) => {
  return (
    <Box h={h} w={w} position="relative" overflow="hidden">
      <NextImage src={src} alt="edit icon" layout="fill" objectFit="cover" />
    </Box>
  )
}

export default Services
