
import { Button, ButtonGroup, Card, Image, Text, 
  CardBody, CardFooter, Divider, Heading, Stack, useColorMode, 
  ColorModeContextType, Flex } from "@chakra-ui/react";
 import { ReactElement } from "react";
import { IProduct } from "../interface";
//  import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const ProductCard = ({ attributes }: 
  { attributes: IProduct }): ReactElement => {

    // const {id}=useParams(); 

  const { colorMode }: ColorModeContextType = useColorMode();

  return (
    <Card border={`1px solid ${colorMode === 'light' ? 'black' : 'white'}`}>
      <CardBody>
        <Image
          src={`${import.meta.env.VITE_SERVER_URL}${attributes?.image?.data?.attributes?.url}`}
          alt='Green double couch with wooden legs'
          height={'300px'}
        />
        <Stack mt='6' spacing='3'>
          <Flex justifyContent={"space-between"} alignItems="center">
            <Heading size='md'>{attributes.title}</Heading>
              <Text color={"blue.600"} fontSize={"2xl"}>
            $ {attributes.price}
          </Text>
          </Flex>
          
          <Text>
            {attributes.descreption}
          </Text>
        
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
        <Link to={`/product/${attributes.id}`}>
  <Button
    variant='solid'
    colorScheme='blue'
    _hover={{
      bg: colorMode === 'light' ? 'black' : 'white',
      color: colorMode === 'light' ? 'white' : 'black'
    }}>
    Details Product
  </Button>
</Link>

          <Button
            _hover={{
              bg: colorMode === 'light' ? 'black' : 'white',
              color: colorMode === 'light' ? 'white' : 'black'
            }}
            variant='solid' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
