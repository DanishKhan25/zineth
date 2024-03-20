import Arrow from "@/app/assets/svg/Arrow";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/logosm.png";
import AboutUs from "./AboutUs";
import CustomBtn from "./CustomBtn";
import RoadMap from "./RoadMap";
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
      <Flex flex="1" justify="flex-end" align="center" gap="20px">
        {/* Right side items */}

        <Box
          flex="0 0 25%"
          fontSize="24px"
          fontWeight="bold"
          color="#fff"
          display="flex"
          alignItems="center"
          gap="5px"
          cursor="pointer"
          _hover={{ color: "orange" }}
        >
          <Tooltip
            label={<RoadMap />}
            aria-label="A tooltip"
            rounded="md"
            width="250px"
          >
            Road Map
          </Tooltip>
          <Arrow width="20px" height="20px" />
        </Box>

        <Box
          flex="0 0 25%"
          fontSize="24px"
          fontWeight="bold"
          color="#fff"
          display="flex"
          alignItems="center"
          gap="5px"
          _hover={{ color: "orange" }}
          cursor="pointer"
        >
          <Link
            href="https://docs.google.com/document/d/1XLClsNYWHr52s-tkFIKg4svRupTjyY-w7YBfKxhSkTY/edit?usp=sharing"
            target="_blank"
          >
            Whitepaper
          </Link>
          <Arrow width="20px" height="20px" />
        </Box>

        <Box
          flex="0 0 25%"
          fontSize="24px"
          fontWeight="bold"
          color="#fff"
          display="flex"
          alignItems="center"
          gap="5px"
          cursor="pointer"
          _hover={{ color: "orange" }}
        >
          <Tooltip
            label={<AboutUs />}
            aria-label="A tooltip"
            rounded="md"
            minW="500px"
          >
            About
          </Tooltip>
          <Arrow width="20px" height="20px" />
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
