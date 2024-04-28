import { Button, ButtonGroup, Card, Image, Text, 
    CardBody, CardFooter, Divider, Heading, Stack, 
     ColorModeContextType,useColorMode,Box} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import ProductSkelaton from "../components/ProductSkelaton";
import { ReactElement, useEffect } from "react";

const ProductDetails = (): ReactElement => {
    const {id} = useParams();
    console.log(id)
   
    const navigate = useNavigate()
    const { colorMode }: ColorModeContextType = useColorMode();

    const getProductList = async () =>{
      
         const {data} = await 
        axios.get(`${import.meta.env.VITE_SERVER_URL}/api/products/${id}?populate=image,categories`);
        return data;
       
      } 

      const {isLoading,data} = useQuery(['products',id],
      ()=> getProductList());

         useEffect(() => {
       document.title=`Product ${data?.data?.attributes?.title} Page`;
              }, [data])

       if(isLoading) return <Box maxW="sm"  mx="auto" my={20} >{
            <ProductSkelaton />
       } </Box>;
       const goBack = () => navigate(-1)
      
  return (
    <>
    <Box my={10}>
         <Button  onClick={goBack}
            variant='solid'>
            --- Go Back
          </Button>
    </Box>
          

          <Card border={'3px solid white'}>
      <CardBody>
        <Image
          src={`${import.meta.env.VITE_SERVER_URL}${data?.data?.attributes?.image?.data?.attributes?.url}`}
          alt='Green double couch with wooden legs'
          height={'300px'}
        />
        <Stack mt='6' spacing='3'>
         
            <Heading size='md'>{data?.data?.attributes?.title}</Heading>
              <Text color={"blue.600"} fontSize={"2xl"}>
            $ {data?.data?.attributes?.price}
          </Text>
        
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button
            _hover={{
              bg: colorMode === 'light' ? 'blue.50' : 'black',
              color: colorMode === 'light' ? 'blue.90' : 'white'
            }}
            variant='solid' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    </>
    
  )
}

export default ProductDetails
