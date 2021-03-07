import * as React from "react"
import { Badge, Box, Image, Skeleton } from "@chakra-ui/react"
import { Link } from "gatsby"
import { ProductModel } from "../models/product"

interface CardProps {
  product: ProductModel
}

export default function Card({ product }: CardProps) {
  return (
    <>
      <Link to={`/products/${product.janCode}`}>
        <Box
          minW="sm"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          overflow="hidden"
          transition="0.8s"
          _hover={{ opacity: "0.9", cursor: "pointer", boxShadow: "2xl" }}
        >
          <Box overflow="hidden" maxH="250px">
            <Image
              src={product?.images?.[0]?.file?.url}
              alt={`Cover Image for ${product.janCode}`}
              maxH="250px"
              objectFit="cover"
              boxSize="sm"
              fallback={<Skeleton h="250px" w="sm" />}
            />
          </Box>

          <Box p="6">
            <Box d="flex" justifyContent="space-between" alignItems="baseline">
              <Box d="flex">
                {!!Math.floor(Math.random() * 2) && (
                  <Badge borderRadius="full" px="2" mr="2" colorScheme="orange">
                    New
                  </Badge>
                )}
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  {product.janCode}
                </Box>
              </Box>
              <Badge borderRadius="full" px="2" colorScheme="blue">
                {product.category}
              </Badge>
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.name}
            </Box>
            <Box color="gray.500" fontWeight="semibold" fontSize="xs">
              {product.size}
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h3"
              isTruncated
              color="blue.700"
            >
              {`¥${product.price}`}
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  )
}
