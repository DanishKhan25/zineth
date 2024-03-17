import Arrow from "@/app/assets/svg/Arrow";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/logosm.png";
import CustomBtn from "./CustomBtn";
const Header = () => {
  return (
    <Flex align="center" justify="space-between" padding="1rem">
      <Box flex="1">
        {/* Left side icon */}
        <Link href="/">
          <Flex align="center" justify="flex-start" gap="10px">
            <Image src={logo} alt="logo" width={50} height={50} />
            <Text fontSize="24px" color="orange">
              Zineth Nova Hash
            </Text>
          </Flex>
        </Link>
      </Box>
      <Flex flex="1" justify="flex-end" align="center" gap="10px">
        {/* Right side items */}
        <Box
          flex="0 0 25%"
          fontSize="24px"
          fontWeight="bold"
          color="#fff"
          display="flex"
          alignItems="center"
          gap="5px"
        >
          Road Map
          <Arrow width="20px" height="20px" />
        </Box>

        <Link
          href="https://docs.google.com/document/d/1XLClsNYWHr52s-tkFIKg4svRupTjyY-w7YBfKxhSkTY/edit?usp=sharing"
          target="_blank"
        >
          <Box
            flex="0 0 25%"
            fontSize="24px"
            fontWeight="bold"
            color="#fff"
            display="flex"
            alignItems="center"
            gap="5px"
          >
            Whitepaper <Arrow width="20px" height="20px" />
          </Box>
        </Link>
        <Box
          flex="0 0 25%"
          fontSize="24px"
          fontWeight="bold"
          color="#fff"
          display="flex"
          alignItems="center"
          gap="5px"
        >
          About <Arrow width="20px" height="20px" />
        </Box>
        <Box flex="0 0 25%">
          <Link href="/buy">
            <CustomBtn colorScheme="yellow" size="lg" variant="solid">
              Buy now
            </CustomBtn>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
