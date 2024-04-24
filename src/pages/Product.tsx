import { Grid } from "@chakra-ui/react"
import ProductCard from "../components/ProductCard"

import axios from "axios";
import { IProduct } from "../interface";
import { useQuery } from "react-query";


const ProductPage: React.FC = () => {

    const getProductList = async () =>{
      const {data} = await 
      axios.get<{ data: IProduct[] }>(`${import.meta.env.VITE_SERVER_URL}/api/products?populate=image,categories`);
      return data;
    } 

    const {isLoading,data} = useQuery('products', () => getProductList());

    if(isLoading) return <div>Loading...</div>;

 
    if (!data) return <div>No data available</div>;

  return (
    <Grid margin={10} 
    templateColumns='repeat(auto-fill,minmax(300px,1fr) )' gap={6}>
        {
           data.data.map((product: IProduct)=>(
               <ProductCard key={product.id} 
               attributes={product} {...product}  /> 
           ) )

        }
    
    
    </Grid>
  )
}

export default ProductPage