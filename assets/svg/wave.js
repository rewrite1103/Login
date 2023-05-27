import * as React from "react"
import { Path, Svg } from "react-native-svg"

const Wave = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
    <Path
      fill="#09f"
      d="m0 192 80-10.7c80-10.3 240-32.3 400-10.6C640 192 800 256 960 245.3c160-10.3 320-96.3 400-138.6l80-42.7V0H0Z"
    />
  </Svg>
)
export default Wave
