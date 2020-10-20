import { Box, Flex, Heading, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex background="deepSkyBlue" position="sticky" top={0} zIndex={1}>
      <Flex
        width="100%"
        maxW="850px"
        mx="auto"
        height="60px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <NextLink href="/">
            <Link>
              <Heading as="h3" size="lg">
                Job Application
              </Heading>
            </Link>
          </NextLink>
        </Box>
        {/* <Box>
          <NextLink href="/createapplication">
            <Link>
              <Heading size="lg">+</Heading>
            </Link>
          </NextLink>
        </Box> */}
        <Box>
          <NextLink href="/addjobadbyurl">
            <Link>
              <Heading size="lg">+</Heading>
            </Link>
          </NextLink>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
