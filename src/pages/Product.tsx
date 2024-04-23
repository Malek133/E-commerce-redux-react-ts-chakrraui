import { Grid } from "@chakra-ui/react"
import ProductCard from "../components/ProductCard"


const ProductPage = () => {
  return (
    <Grid margin={10} templateColumns='repeat(auto-fill,minmax(300px,1fr) )' gap={6}>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </Grid>
  )
}

export default ProductPage