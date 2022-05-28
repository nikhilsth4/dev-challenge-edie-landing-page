import { Box, Flex, Heading } from "@chakra-ui/react"
import React from "react"
import { HamburgerIcon } from "@chakra-ui/icons"
const Navbar = () => {
  return (
    <header>
      <nav>
        <Box position="fixed" top="0" w="100%" p={3} left="0">
          <Flex align="center" justify="space-between">
            <Heading
              as="h1"
              size={"5xl"}
              fontFamily="mono"
              fontWeight="extrabold"
            >
              Edie
            </Heading>
            <HamburgerIcon w={5} h={5} />
          </Flex>
        </Box>
      </nav>
    </header>
  )
}

export default Navbar
