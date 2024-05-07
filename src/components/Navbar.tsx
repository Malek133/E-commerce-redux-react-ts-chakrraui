
 import { Link } from "react-router-dom";
 import { Box, Flex, Button, Heading, useColorModeValue, 
  MenuDivider, Avatar, Menu, MenuButton, MenuList, MenuItem, 
  Center, Stack, useColorMode } from '@chakra-ui/react';
 import { MoonIcon, SunIcon } from '@chakra-ui/icons';
 import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../app/feauture/CartSlice";
import CookiesService from "../srvices/CookiesService";
import CardPage from "../pages/CardPage";
import { onOpenCartDrawerAction } from "../app/feauture/GlobalSlice";




export default function Nav() {
   const { CartProducts } = useSelector(selectCart)
  const { colorMode, toggleColorMode } = useColorMode()
  const token = CookiesService.get('jwt')

  const Logout = () => {
     CookiesService.remove("jwt")
     window.location.reload();
  }

  const dispatch = useDispatch( );
  const onOpen = () => {
   dispatch(onOpenCartDrawerAction())
 }

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
                    
                       
               <Button onClick={onOpen}> <CardPage /> Card ({CartProducts.length})</Button>
                   
                    {
                       token ? (
                          <Menu>
                             <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                   size={'sm'}
                                   src={'https://i.pinimg.com/564x/fd/b4/02/fdb4022a6e0261308d11aa5f7640ccc6.jpg'}
                                />
                             </MenuButton>
                             <MenuList alignItems={'center'}>
                                <br />
                                <Center>
                                   <Avatar
                                      size={'2xl'}
                                      src={'https://i.pinimg.com/564x/fd/b4/02/fdb4022a6e0261308d11aa5f7640ccc6.jpg'}
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
                                <MenuItem onClick={Logout}>Logout</MenuItem>
                             </MenuList>
                          </Menu>
                       ) : (
                          <Button
                             variant='solid'
                             colorScheme='blue'
                             _hover={{
                                bg: colorMode === 'light' ? 'black' : 'white',
                                color: colorMode === 'light' ? 'blue.50' : 'black'
                             }}>
                             <Link to="/login">Login</Link>
                          </Button>
                       )
                    }
                 </Stack>
              </Flex>
           </Flex>
        </Box>
     </>
  )
}