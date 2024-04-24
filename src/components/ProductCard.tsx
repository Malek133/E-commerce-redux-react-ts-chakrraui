
import { Button, ButtonGroup, Card, Image, Text, 
  CardBody, CardFooter, Divider, Heading, Stack, useColorMode, 
  ColorModeContextType, Flex } from "@chakra-ui/react";
 import { ReactElement } from "react";
import { IProduct } from "../interface";

// interface ProductAttributes {
//   image?: {
//     data?: {
//         attributes?: {
//         url?: string;
//       };
//     };
//   };
//   title?: string;
//   descreption?: string;
//   price?: number;
// }


const ProductCard = ({ attributes }: 
  { attributes: IProduct }): ReactElement => {



  const { colorMode }: ColorModeContextType = useColorMode();

  return (
    <Card border={'3px solid white'}>
      <CardBody>
        <Image
          src={`${import.meta.env.VITE_SERVER_URL}${attributes?.image?.data?.attributes?.url}`}
          alt='Green double couch with wooden legs'
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
          <Button
            variant='solid' colorScheme='blue'
            _hover={{
              bg: colorMode === 'light' ? 'blue.50' : 'black',
              color: colorMode === 'light' ? 'blue.50' : 'white'
            }}>
            Buy now
          </Button>
          <Button
            _hover={{
              bg: colorMode === 'light' ? 'blue.50' : 'black',
              color: colorMode === 'light' ? 'blue.90' : 'white'
            }}
            variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
