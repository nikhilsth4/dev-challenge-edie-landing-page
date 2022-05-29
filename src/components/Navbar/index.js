import { Box, Flex, Heading, chakra, Link } from "@chakra-ui/react"
import React from "react"
import { HamburgerIcon } from "@chakra-ui/icons"
import NextLink from "next/link"

const NavLink = ({ href, name }) => (
  <NextLink href={href} passHref>
    <Link fontWeight="500" fontSize="20px" lineHeight="36px">
      {name}
    </Link>
  </NextLink>
)

const Navbar = () => {
  return (
    <chakra.header
      position="fixed"
      top="0"
      w="100%"
      p={[3, null, null, "16px 42px"]}
      left="0"
      bg="white"
      zIndex={99999}
    >
      <nav>
        <Box>
          <Flex align="center" justify="space-between">
            <Heading
              as="h1"
              fontSize={["2xl", null, null, "4xl"]}
              fontFamily="mono"
              fontWeight="extrabold"
              lineHeight={["", null, null, "53px"]}
            >
              Edie
            </Heading>
            <HamburgerIcon
              w={5}
              h={5}
              display={["block", null, null, "none"]}
            />
            <Flex gap={10}>
              <NavLink href="/" name="Home" />
              <NavLink href="/" name="Services" />
              <NavLink href="/" name="Our Works" />
              <NavLink href="/" name="Clients" />
              <NavLink href="/" name="Contact" />
            </Flex>
          </Flex>
        </Box>
      </nav>
    </chakra.header>
  )
}

export default Navbar
