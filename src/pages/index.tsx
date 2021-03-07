import * as React from "react"
import { graphql } from "gatsby"
import { Box, Flex, GridItem, Icon, IconButton } from "@chakra-ui/react"

import Base from "../layouts/Base"
import Card from "../components/Card"
import { ProductModel } from "../models/product"

interface IndexProps {
  data: {
    allContentfulProduct: { nodes: ProductModel[] }
  }
}

export default function IndexPage({ data }: IndexProps): JSX.Element {
  return (
    <>
      <Base>
        <GridItem
          w="100%"
          h="100%"
          zIndex={2}
          colSpan={{
            base: 2,
            sm: 3,
            md: 6,
            xl: 12,
          }}
          colStart={{
            base: 1,
            sm: 2,
            md: 2,
            xl: 2,
          }}
        >
          <Flex mt={150} w="100%" flexWrap="wrap" justifyContent="center">
            {data.allContentfulProduct.nodes.map(
              (product: ProductModel, index: number) => {
                return (
                  <Box px={4} py={7} key={index} position="relative">
                    <Card product={product} />
                    <IconButton
                      aria-label="shopping cart"
                      size="lg"
                      isRound
                      boxShadow="md"
                      icon={
                        <Icon boxSize={6} viewBox="0 0 24 24">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.05138 8.92C4.07149 8.6694 4.18526 8.43557 4.37002 8.26508C4.55478 8.09459 4.79698 7.99995 5.04838 8H18.9524C19.2038 7.99995 19.446 8.09459 19.6307 8.26508C19.8155 8.43557 19.9293 8.6694 19.9494 8.92L20.8264 19.84C20.8485 20.1152 20.8133 20.392 20.7232 20.6529C20.6331 20.9139 20.4899 21.1533 20.3027 21.3562C20.1155 21.5592 19.8883 21.7211 19.6354 21.8319C19.3825 21.9427 19.1095 21.9999 18.8334 22H5.16738C4.8913 21.9999 4.61823 21.9427 4.36536 21.8319C4.11249 21.7211 3.88529 21.5592 3.69808 21.3562C3.51086 21.1533 3.36768 20.9139 3.27755 20.6529C3.18742 20.392 3.15229 20.1152 3.17438 19.84L4.05038 8.92H4.05138Z"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M16 11V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V11"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Icon>
                      }
                      position="absolute"
                      bottom={12}
                      right={10}
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
                    />
                  </Box>
                )
              }
            )}
          </Flex>
        </GridItem>
        <GridItem
          h="100px"
          colSpan={{
            base: 2,
            sm: 2,
            md: 6,
            xl: 6,
          }}
          colStart={{
            base: 1,
            sm: 2,
            md: 2,
            xl: 8,
          }}
          bg="white"
        ></GridItem>
      </Base>
    </>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        images {
          file {
            url
          }
        }
        janCode
        name
        description {
          id
          description
        }
        size
        weight
        createdAt
        releaseDate
        price
        category
        brand
      }
    }
  }
`
