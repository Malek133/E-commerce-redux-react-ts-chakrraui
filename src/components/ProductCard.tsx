import { Button, ButtonGroup, Card,Image,Text, CardBody, 
    CardFooter, Divider, Heading, Stack,
     useColorMode, 
     ColorModeContextType} from "@chakra-ui/react"


const ProductCard = () => {
   
const  colorsMood: ColorModeContextType  = useColorMode();

   
  return (
    <Card border={'3px solid white'}>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        // marginLeft={32}
        //  borderRadius={'50%'} width={'150px'} height={'150px'}
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>Living room Sofa</Heading>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with a
          sprinkle of vintage design.
        </Text>
        <Text color={"blue.600"} fontSize={"2xl"}>
          $450
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button 
        variant='solid' colorScheme='blue'
        _hover={{
            bg: colorsMood.colorMode === 'light' ? 'blue.50' : 'black',
            color:colorsMood.colorMode === 'light' ? 'blue.50' : 'white'
        }}>
          Buy now
        </Button>
        <Button 
        _hover={{
            bg: colorsMood.colorMode === 'light' ? 'blue.50' : 'black',
            color:colorsMood.colorMode === 'light' ? 'blue.90' : 'white'
        }}
        variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default ProductCard
