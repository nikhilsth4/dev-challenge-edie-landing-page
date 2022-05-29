import { Box, Grid, Heading, HStack, Text } from "@chakra-ui/react"
import React from "react"
import Container from "../Container"
import NextImage from "next/image"

const Works = () => {
  return (
    <Container>
      <Box maxW="272px" ml={8} mb={10}>
        <Heading as="h2" size="5xl">
          Good design means
          <br /> good business
        </Heading>
      </Box>
      <Grid gap={9}>
        <Box>
          <Work
            src="/images/smarthome.jpg"
            subTitle="Full Stack application"
            title="Smart Home Dashboard"
          />
        </Box>
        <Box>
          <Work
            src="/images/onboard.png"
            subTitle="UX/UI design"
            title="Onboard application"
          />
        </Box>
        <Box>
          <Work
            src="/images/booking.png"
            subTitle="Mobile Application"
            title="Booking System"
          />
        </Box>
        <Box>
          <Work
            src="/images/juice-product.png"
            subTitle="Frontend Application"
            title="Juice product homepage"
          />
        </Box>
      </Grid>
      <HStack spacing={3} align="center">
        <Text
          color="primary"
          fontSize="18px"
          fontWeight={500}
          lineHeight="27px"
          mt={9}
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
        >
          see more
          <NextImage
            src="/images/icons/arrow-forward.svg"
            width="16px"
            height="8px"
            alt="forward icon"
          />
        </Text>
      </HStack>
    </Container>
  )
}

const Work = ({ src, subTitle, title }) => {
  return (
    <>
      <Box
        h={"350px"}
        w={"350px"}
        position="relative"
        overflow="hidden"
        borderRadius="24px"
      >
        <NextImage src={src} alt={subTitle} layout="fill" objectFit="cover" />
      </Box>
      <Text
        fontStyle={"normal"}
        fontWeight={300}
        fontSize="12px"
        lineHeight="18px"
        color="gray.400"
        mt={3}
      >
        {subTitle}
      </Text>
      <Heading size="2xl">{title}</Heading>
    </>
  )
}
export default Works
