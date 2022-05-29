import {
  Box,
  Flex,
  Heading,
  chakra,
  Link,
  Show,
  Hide,
  VStack,
  Collapse,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import NextLink from "next/link"

export const NavLink = ({ href, name }) => (
  <NextLink href={href} passHref>
    <Link fontWeight="500" fontSize={["16px", null, "20px"]} lineHeight="36px">
      <>{name}</>
    </Link>
  </NextLink>
)

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <chakra.header
        position="fixed"
        top="0"
        w="100%"
        p={[3, null, null, "16px 42px"]}
        left="0"
        bg="white"
        zIndex={9999}
        boxShadow={"0px 1px 1px rgb(51 51 51 / 5%)"}
      >
        <nav>
          <Box maxW="1440px">
            <Flex align="center" justify="space-between">
              <Heading
                as="h1"
                size="4xl"
                fontFamily="mono"
                fontWeight="extrabold"
              >
                Edie
              </Heading>
              <Show below="md">
                <Box onClick={onToggle}>
                  <HamburgerIcon w={5} h={5} />
                </Box>
              </Show>
              <Hide below="md">
                <Flex gap={10}>
                  <NavLink href="#hero" name="Home" />
                  <NavLink href="/" name="Services" />
                  <NavLink href="/" name="Our Works" />
                  <NavLink href="/" name="Clients" />
                  <NavLink href="/" name="Contact" />
                </Flex>
              </Hide>
            </Flex>
          </Box>
        </nav>
      </chakra.header>
      <Show below="md">
        {isOpen && (
          <ScaleFade initialScale={1} in={isOpen}>
            <Box
              h="100vh"
              zIndex={99999}
              position="fixed"
              top="0"
              bg="white"
              w="full"
              scrollBehavior={"unset"}
            >
              <Flex onClick={onToggle} mt={7} mr={3} justify="flex-end">
                <CloseIcon w={5} h={5} />
              </Flex>
              <VStack justify="center" mt={2} align="center" h="full">
                <NavLink href="/" name="Home" />
                <NavLink href="/" name="Services" />
                <NavLink href="/" name="Our Works" />
                <NavLink href="/" name="Clients" />
                <NavLink href="/" name="Contact" />
              </VStack>
            </Box>
          </ScaleFade>
        )}
      </Show>
    </>
  )
}

export default Navbar
