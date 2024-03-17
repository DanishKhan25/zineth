import Arrow from "@/app/assets/svg/Arrow";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../app/assets/image-1.png";
import CustomBtn from "./CustomBtn";
const TextImageComponent = () => {
  return (
    <Flex
      align="center"
      justify="center"
      padding="1rem"
      width="95%"
      height="90vh"
      margin="0 auto"
    >
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        flex="1"
        height="100%"
        color="#000"
        // backgroundColor="blue.500"
      >
        <Text fontSize="48px" margin="20px 0" color="#fff">
          To Move Forward
        </Text>
        <Text fontSize="48px" margin="0" color="#fff">
          <strong>with Zineth Nova Hash</strong>
        </Text>
        <Text fontSize="24px" margin="20px 0" color="white">
          Click here
        </Text>
        <Arrow width="40px" height="40px" />
        <Link href="/buy">
          <CustomBtn colorScheme="orange" size="lg" variant="solid" mt="20px">
            ZNH Token
          </CustomBtn>
        </Link>
      </Flex>

      <Flex align="center" justify="center" flex="1" height="100%">
        <Image src={image1} alt="image" style={{ borderRadius: "20px" }} />
      </Flex>
    </Flex>
  );
};

export default TextImageComponent;
