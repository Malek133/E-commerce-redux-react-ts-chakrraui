
import { Link } from "react-router-dom"

import {
  Box,Flex, Button,Heading,  useColorModeValue,

  // ButtonGroup,// MenuDivider,// useDisclosure,
  // Avatar,// Menu,// MenuButton,// MenuList,
  // MenuItem,// Center,
  Stack,
  useColorMode,
  
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'




export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
           
       <Flex justifyContent={"center"} alignItems={"center"} gap={25}>
       <Heading size='xl'><Link to="/">Logo</Link> </Heading>
        <Heading size='md'><Link to='/dashboard'>Dashboard</Link></Heading>
        <Heading size='md'><Link to='/product'>ProductPage</Link></Heading>
        <Heading size='md'><Link to='/about'>About</Link></Heading>
         </Flex>

          </Box>
    
             
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
             
              <Button
               variant='solid'
                colorScheme='blue'
                _hover={{
                  bg: colorMode === 'light' ? 'black' : 'white',
                  color: colorMode === 'light' ? 'blue.50' : 'black'
                    }}>
                <Link to="/login">Login</Link>
                </Button>

                <Button
               variant='solid'
                colorScheme='red'
                _hover={{
                  bg: colorMode === 'light' ? 'black' : 'white',
                  color: colorMode === 'light' ? 'red.50' : 'black'
                    }}>
                <Link to="/signin">Sing in</Link>
                </Button>

              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}



