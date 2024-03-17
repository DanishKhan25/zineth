"use client";
import Header from "@/components/Header";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import bitcoinLogo from "../assets/Bitcoinlogo.png";
import cardLogo from "../assets/cardLogo.png";
import image1 from "../assets/image-2.png";
import usdtLogo from "../assets/usdtLogo.png";
import classes from "../page.module.css";
const page = () => {
  return (
    <main className={classes.body}>
      <Header />
      <Flex
        align="center"
        justify="center"
        padding="1rem"
        width="95%"
        margin="0 auto"
      >
        <Flex
          align="center"
          justify="center"
          flexDirection="column"
          flex="1"
          height="100%"
          color="#000"
        >
          <Image src={image1} alt="image" style={{ borderRadius: "20px" }} />
        </Flex>

        <Flex align="center" justify="center" flex="1" height="100%">
          <Box width="90%" padding="20px" borderRadius="10px">
            <Box
              backgroundColor="gray.800"
              padding="20px"
              borderRadius="20px 20px 0 0"
            >
              <Text
                fontSize="32px"
                margin="20px 0"
                color="yellow.500"
                textAlign="center"
              >
                Buy now before price increases
              </Text>
              <Button
                colorScheme="green"
                width="100%"
                borderRadius="20px"
                mb="10px"
              >
                Until Next stage
              </Button>
              <Text fontSize="12px" color="#fff" textAlign="center">
                USDT Raised: $20084,855,5 / $2,101,799
              </Text>
              <Text fontSize="12px" color="#fff" textAlign="center">
                Your Purchased $ZNH = 0
              </Text>
            </Box>
            <Box
              backgroundColor="white"
              width="100%"
              padding="10px"
              borderRadius="0 0 20px 20px"
            >
              <Flex align="center" justify="center" my={4} position="relative">
                <Box flex="1" borderBottom="1px solid #333"></Box>
                <Text px={4} color="#333" fontSize="lg">
                  1 $ZNH=$0.02
                </Text>
                <Box flex="1" borderBottom="1px solid #333"></Box>
              </Flex>
              <Tabs variant="unstyled">
                <TabList width="100%" padding="4px" display="flex" gap="5px">
                  <Tab
                    _selected={{ border: "2px solid #000" }}
                    width="33%"
                    border="1px solid #c0c0c0"
                  >
                    <Image src={bitcoinLogo} alt="image" width={20} />
                    &nbsp; BNB
                  </Tab>
                  <Tab
                    _selected={{ border: "2px solid #000" }}
                    width="33%"
                    border="1px solid #c0c0c0"
                  >
                    <Image src={usdtLogo} alt="image" width={20} />
                    &nbsp; USDT
                  </Tab>
                  <Tab
                    _selected={{ border: "2px solid #000" }}
                    width="33%"
                    border="1px solid #c0c0c0"
                  >
                    <Image src={cardLogo} alt="image" width={20} />
                    &nbsp; Card
                  </Tab>
                </TabList>
              </Tabs>
              <Flex gap={4} mt={4}>
                <InputGroup bg="gray.100" borderRadius="10px">
                  <Input placeholder="0" />
                  <InputRightElement>
                    <Image src={bitcoinLogo} alt="image" width={20} />
                  </InputRightElement>
                </InputGroup>
                <InputGroup bg="gray.100" borderRadius="10px">
                  <Input placeholder="0" />
                  <InputRightElement>
                    <Image src={usdtLogo} alt="image" width={20} />
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Button
                colorScheme="cyan"
                width="100%"
                borderRadius="20px"
                mt={4}
              >
                Connect Wallet
              </Button>
              <Button
                colorScheme="whatsapp"
                width="100%"
                borderRadius="20px"
                mt={4}
              >
                Buy with ETH
              </Button>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </main>
  );
};

export default page;
