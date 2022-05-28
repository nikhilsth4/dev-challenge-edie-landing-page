// theme/index.js
import { extendTheme } from "@chakra-ui/react"

// Global style overrides
import styles from "./styles"

// Foundational style overrides
import colors from "./foundations/colors"
import fonts from "./foundations/fonts"
import fontSizes from "./foundations/fontSizes"

// Component style overrides
import Button from "./components/button"
import Heading from "./components/heading"

const overrides = {
  colors,
  fonts,
  fontSizes,

  styles,
  // Other foundational style overrides go here
  // Other components go here
  components: {
    // Button,
    Heading,
  },
}

export default extendTheme(overrides)
