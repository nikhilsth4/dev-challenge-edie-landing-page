import { Box, Grid, Heading, HStack, Text } from "@chakra-ui/react"
import React from "react"
import Container from "../Container"
import NextImage from "next/image"

const Works = () => {
  return (
    <Container>
      <Box mx={[8, null, null, "auto"]}>
        <Grid
          templateColumns={["1fr", null, null, "repeat(2,1fr)"]}
          justifyContent="center"
          gap={[9, null, null, 4]}
          templateRows={[
            "72px 0 repeat(4,1fr) 28px",
            null,
            null,
            "108px 600px 600px 1fr",
            "108px 732px 732px 1fr",
          ]}
          maxW={[null, null, null, "800px", "1106px"]}
          mx="auto"
        >
          <Box
            maxW={["272px", null, null, "400px", "545px"]}
            mb={[10, null, null, 0, null]}
            ml={[7, null, null, 0, null]}
          >
            <Heading as="h2" size="4xl">
              Good design means
              <br /> good business
            </Heading>
          </Box>
          <Box />
          <Box
            justifySelf={[null, null, null, "end"]}
            alignSelf={[null, null, null, "end"]}
          >
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
          <Box
            justifySelf={[null, null, null, "end"]}
            alignSelf={[null, null, null, "end"]}
          >
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
          <HStack
            spacing={3}
            align="center"
            justify={[null, null, null, "flex-end"]}
            gridColumnStart={[null, null, null, -2]}
            gridColumnEnd={[null, null, null, -1]}
            w={[null, null, null, "400px", "545px"]}
          >
            <Text
              color="primary"
              fontSize={["18px", null, null, "24px"]}
              fontWeight={500}
              lineHeight={["27px", null, null, "36px"]}
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
        </Grid>
      </Box>
    </Container>
  )
}

const Work = ({ src, subTitle, title }) => {
  return (
    <>
      <Box
        h={["350px", null, null, "400px", "545px"]}
        w={["350px", null, null, "400px", "545px"]}
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
        mt={[3, null, null, null, 5]}
      >
        {subTitle}
      </Text>
      <Heading size="2xl">{title}</Heading>
    </>
  )
}
export default Works
