import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Clients from "../src/components/Clients"
import Contact from "../src/components/Contact"
import Hero from "../src/components/Hero"
import Navbar from "../src/components/Navbar"
import Services from "../src/components/Services"
import Works from "../src/components/Works/Index"

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Edie Home page</title>
        <meta name="description" content="Edie home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Clients />
      <Contact />
    </Box>
  )
}
