import { Button } from "@chakra-ui/button"
import { Badge, Box, GridItem } from "@chakra-ui/layout"
import * as React from "react"
import Base from "../layouts/Base"
import { ProductModel } from "../models/product"

interface ProductProps {
  pageContext: {
    product: ProductModel
  }
}

export default function Product({ pageContext }: ProductProps): JSX.Element {
  const { product } = pageContext
  return (
    <Base>
      <GridItem
        colStart={{
          base: 1,
          sm: 1,
          md: 1,
          xl: 1,
        }}
        colSpan={{
          base: 2,
          sm: 4,
          md: 8,
          xl: 14,
        }}
        d={{
          base: "block",
          sm: "block",
          md: "flex",
          xl: "flex",
        }}
      >
        <Box
          w="100%"
          h={{
            base: 300,
            sm: 500,
            md: 700,
            xl: 700,
          }}
          mt={150}
          bgImage={`url(${product?.images?.[0]?.file?.url})`}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        ></Box>
        <Box
          w="100%"
          p={10}
          mt={150}
          d="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Box fontSize="1.5em" fontWeight="medium">
              {product?.name}
            </Box>
            <Box mt={1}>
              <Badge borderRadius="full" px="2" colorScheme="blue">
                {product?.category}
              </Badge>
            </Box>
            <Box
              mt={2}
              fontWeight="bold"
              fontSize="1.3em"
              color="blue.700"
            >{`¥${product?.price}`}</Box>
            <Box mt={5} fontSize="0.8em" color="gray.600">
              JAN CODE
            </Box>
            <Box mt={1} fontSize="1em">
              {product?.janCode}
            </Box>
            <Box mt={3} fontSize="0.8em" color="gray.600">
              SIZE
            </Box>
            <Box mt={1} fontSize="1em">
              {product?.size}
            </Box>
            <Box mt={3} fontSize="0.8em" color="gray.600">
              DESCRIPTION
            </Box>
            <Box mt={1} fontSize="1em">
              {product?.description?.description}
            </Box>
            <Button
              mt={20}
              colorScheme="blue"
              variant="outline"
              className="snipcart-add-item"
              data-item-id={product?.janCode}
              data-item-price={product?.price}
              data-item-url={`/products/${product?.janCode}`}
              data-item-description={product?.description?.description}
              data-item-image={product?.images?.[0]?.file?.url}
              data-item-name={product?.name}
              data-item-quantity="1"
              data-item-custom1-name="Gift"
              data-item-custom1-type="checkbox"
              data-item-width="13"
            >
              購入する
            </Button>
          </Box>
        </Box>
      </GridItem>
      <GridItem
        w="100%"
        h="100px"
        colSpan={{
          base: 2,
          sm: 2,
          md: 6,
          xl: 12,
        }}
        colStart={{
          base: 1,
          sm: 1,
          md: 1,
          xl: 1,
        }}
      ></GridItem>
    </Base>
  )
}
