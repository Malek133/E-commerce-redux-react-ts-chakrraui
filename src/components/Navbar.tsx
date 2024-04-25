
import { Link } from "react-router-dom"


// const Navbar = () => {
//   return (
//     <Box>
//     <ButtonGroup spacing='2'>
//           <Button
//             variant='solid' colorScheme='blue'>
           
//             <Link to="/">HomePage</Link>
//           </Button>
//           <Button
          
//             variant='solid' colorScheme='blue'>
//             <Link to='/product'>ProductPage</Link>
//           </Button>
//         </ButtonGroup>
//     </Box>
//   )
// }

// export default Navbar

// 'use client'

import {
  Box,
  // ButtonGroup,
  Flex,
  // Avatar,
  Button,Heading,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
  // MenuDivider,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  // Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

// interface Props {
//   children: React.ReactNode
// }


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
           
                <Flex justifyContent={"center"} alignItems={"center"} gap={15}>
                <Heading size='md'><Link to="/">Logo</Link> </Heading>
              <Heading size='sm'><Link to='/product'>ProductPage</Link></Heading>
              </Flex>
          </Box>

             
           
    

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
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



