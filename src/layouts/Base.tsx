import React, { ReactNode, useContext } from "react"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context"
import {
  Grid,
  GridItem,
  Icon,
  Avatar,
  AvatarBadge,
  Text,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

interface BaseProps {
  children: ReactNode | null
}

export default function Base({ children = null }: BaseProps): JSX.Element {
  const { state } = useContext(SnipcartContext)
  const { cartQuantity } = state

  return (
    <>
      <Grid
        maxW="100vw"
        minH="100vh"
        templateRows="auto 1fr auto auto"
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "20px repeat(2, 1fr) 20px",
          md: "50px repeat(6, 1fr) 50px",
          xl: "100px repeat(12, 1fr) 100px",
          "2xl": "300px repeat(12, 1fr) 300px",
        }}
        rowGap={1}
        columnGap={{
          base: 2,
          sm: 2,
          md: 2,
          xl: 2,
        }}
      >
        <GridItem
          w="100%"
          h="80px"
          position="fixed"
          zIndex={10}
          colSpan={{
            base: 3,
            sm: 5,
            md: 8,
            xl: 14,
          }}
          boxShadow="lg"
          as="header"
          bgColor="white"
          opacity="90%"
        >
          <Grid
            h="80px"
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "20px repeat(3, 1fr) 20px",
              md: "50px repeat(6, 1fr) 50px",
              xl: "100px repeat(12, 1fr) 100px",
              "2xl": "300px repeat(12, 1fr) 300px",
            }}
            templateRows="1fr auto"
            rowGap={0}
            columnGap={{
              base: 2,
              sm: 2,
              md: 2,
              xl: 2,
            }}
          >
            <GridItem
              colStart={{
                base: 1,
                sm: 2,
                md: 2,
                xl: 2,
              }}
              display={{
                base: "none",
                sm: "none",
                md: "flex",
                xl: "flex",
              }}
              alignItems="center"
              justifyContent="center"
              lineHeight="1em"
              fontWeight="medium"
            >
              <Text fontSize="0.9em">Home</Text>
            </GridItem>
            <GridItem
              colStart={{
                base: 1,
                sm: 2,
                md: 3,
                xl: 3,
              }}
              display={{
                base: "none",
                sm: "none",
                md: "flex",
                xl: "flex",
              }}
              alignItems="center"
              justifyContent="center"
              lineHeight="1em"
              fontWeight="medium"
            >
              <Text fontSize="0.9em">About</Text>
            </GridItem>
            <GridItem
              colStart={{
                base: 1,
                sm: 2,
                md: 3,
                xl: 3,
              }}
              display={{
                base: "flex",
                sm: "flex",
                md: "none",
                xl: "none",
              }}
              alignItems="center"
              justifyContent="center"
              lineHeight="1em"
              fontWeight="medium"
            >
              <HamburgerIcon w={6} h={6} />
            </GridItem>
            <GridItem
              colStart={{
                base: 2,
                sm: 3,
                md: 4,
                xl: 7,
              }}
              colSpan={{
                base: 1,
                sm: 1,
                md: 2,
                xl: 2,
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontFamily="Cookie" fontSize="1.8em">
                Dummy Shop
              </Text>
            </GridItem>
            <GridItem
              colStart={{
                base: 3,
                sm: 4,
                md: 7,
                xl: 13,
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                className="snipcart-checkout"
                bg="white"
                cursor="pointer"
                icon={
                  <Icon boxSize={7} viewBox="0 0 36 36">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3281 32C14.5708 32 15.5781 30.9926 15.5781 29.75C15.5781 28.5074 14.5708 27.5 13.3281 27.5C12.0855 27.5 11.0781 28.5074 11.0781 29.75C11.0781 30.9926 12.0855 32 13.3281 32Z"
                        fill="black"
                      />
                      <path
                        d="M27 32C28.2426 32 29.25 30.9926 29.25 29.75C29.25 28.5074 28.2426 27.5 27 27.5C25.7574 27.5 24.75 28.5074 24.75 29.75C24.75 30.9926 25.7574 32 27 32Z"
                        fill="black"
                      />
                      <path
                        d="M33.0785 5.36999C32.9855 5.25527 32.8682 5.1626 32.735 5.09862C32.6019 5.03465 32.4562 5.00096 32.3085 4.99999H11.4885L12.1385 6.99999H30.9985L28.3285 19H13.3285L8.75852 4.52999C8.70909 4.37645 8.62325 4.23714 8.50833 4.12396C8.3934 4.01077 8.2528 3.92707 8.09852 3.87999L3.99852 2.61999C3.87245 2.58125 3.73999 2.56772 3.60869 2.58017C3.47739 2.59262 3.34983 2.63082 3.2333 2.69257C2.99794 2.81728 2.82176 3.03038 2.74352 3.28499C2.66528 3.53959 2.69139 3.81486 2.8161 4.05021C2.94082 4.28557 3.15392 4.46175 3.40852 4.53999L6.99852 5.63999L11.5885 20.14L9.94852 21.48L9.81852 21.61C9.41286 22.0775 9.18292 22.6718 9.16832 23.2906C9.15372 23.9094 9.35536 24.5139 9.73852 25C10.0111 25.3314 10.3574 25.5945 10.7499 25.7682C11.1423 25.9418 11.5699 26.0212 11.9985 26H28.6885C28.9537 26 29.2081 25.8946 29.3956 25.7071C29.5832 25.5196 29.6885 25.2652 29.6885 25C29.6885 24.7348 29.5832 24.4804 29.3956 24.2929C29.2081 24.1053 28.9537 24 28.6885 24H11.8385C11.7234 23.9961 11.6112 23.9625 11.5128 23.9025C11.4144 23.8426 11.3331 23.7583 11.2768 23.6577C11.2205 23.5572 11.1911 23.4439 11.1914 23.3286C11.1917 23.2134 11.2217 23.1002 11.2785 23L13.6885 21H29.1285C29.3597 21.0056 29.5857 20.931 29.768 20.7888C29.9503 20.6466 30.0777 20.4456 30.1285 20.22L33.2985 6.21999C33.3289 6.0709 33.3249 5.91685 33.2868 5.76955C33.2487 5.62225 33.1774 5.4856 33.0785 5.36999V5.36999Z"
                        fill="black"
                      />
                    </svg>
                  </Icon>
                }
              >
                {cartQuantity > 0 && (
                  <AvatarBadge
                    boxSize="1.5em"
                    bg="cyan.400"
                    fontSize="sm"
                    color="white"
                    borderWidth={1}
                    fontFamily="Noto Sans JP"
                  >
                    {cartQuantity}
                  </AvatarBadge>
                )}
              </Avatar>
            </GridItem>
            <GridItem
              rowStart={2}
              colSpan={{
                base: 3,
                sm: 5,
                md: 8,
                xl: 14,
              }}
              h="3px"
              bgGradient="linear(to-r, cyan.300,teal.100,blue.500, cyan.300)"
            />
          </Grid>
        </GridItem>
        {children}
        <GridItem
          as="footer"
          w="100%"
          h="10px"
          zIndex={2}
          colSpan={{
            base: 2,
            sm: 4,
            md: 8,
            xl: 14,
          }}
          boxShadow="lg"
          bgColor="gray.50"
        />
      </Grid>
    </>
  )
}
