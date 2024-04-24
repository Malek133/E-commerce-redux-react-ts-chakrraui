import { Box, Button, ButtonGroup } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <Box>
    <ButtonGroup spacing='2'>
          <Button
            variant='solid' colorScheme='blue'>
           
            <Link to="/">HomePage</Link>
          </Button>
          <Button
          
            variant='solid' colorScheme='blue'>
            <Link to='/product'>ProductPage</Link>
          </Button>
        </ButtonGroup>
    </Box>
  )
}

export default Navbar