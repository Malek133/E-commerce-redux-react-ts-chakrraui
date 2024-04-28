
import {
    Flex, Box, FormControl, FormLabel, Input,
    Checkbox,Stack,Button,Heading,Text,useColorModeValue,
    InputGroup, InputRightElement,FormHelperText,
  } from '@chakra-ui/react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectLogin, userLogin } from '../app/feauture/LoginSlice';
  
  export default function SimpleCard() {

    const dispatch = useDispatch();
    const {loading,data,error}=useSelector(selectLogin);

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isUsername, setIsUsername] = useState<boolean>(false);
    const [isPassword, setIsPassword] = useState<boolean>(false);
    const [user,setUser] = useState({
      identifier:"",
      password:""
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const {name , value} = e.target;
      setUser({...user,[name]:value});
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      if(!user.identifier && !user.password){
        setIsUsername(true)
        setIsPassword(true) 
        return;
      }
        if(!user.identifier){
          setIsUsername(true)
          return;
        }

        if(!user.password){
          setIsPassword(true)
          return;
        }
       
      
      setIsUsername(false)
      setIsPassword(false)
      dispatch(userLogin(user))
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>LogIn in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
            </Text>
          </Stack>
          <Box as={'form'} onSubmit={submitHandler}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="identifier">
                <FormLabel>Email address</FormLabel>
                <Input isInvalid={isUsername} errorBorderColor='crimson' 
                type="email" value={user.identifier} name='identifier'
                onChange={onChangeHandler} />
                 {isUsername ? ( 
                    <FormHelperText color={'red.500'}>
                 Enter the email you'd like to receive the newsletter on.
               </FormHelperText>
                ) : (
               null
                   )} 
              </FormControl>
             
              <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} 
                isInvalid={isPassword} errorBorderColor='crimson' name='password'
                value={user.password} onChange={onChangeHandler} />
              
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
                </InputGroup>
                {isPassword ? ( 
                 <FormHelperText color={'red.500'}>
                 Enter the password please
               </FormHelperText>
                ) : (
                  null
                  )} 
              
            </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'blue.400'}>Forgot password?</Text>
                </Stack>

                <Button
                isLoading={loading}
                type='submit'
                  bg={isPassword || isUsername ? 'red.500' : 'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: isPassword || isUsername ? 'red.600' : 'blue.500'
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }
