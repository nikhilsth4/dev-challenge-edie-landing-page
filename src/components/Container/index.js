import { Box } from "@chakra-ui/react"
import React from "react"

const Container = ({ children, mt = "102px" }) => {
  return (
    <Box mt={mt} mx={3}>
      {children}
    </Box>
  )
}

export default Container
