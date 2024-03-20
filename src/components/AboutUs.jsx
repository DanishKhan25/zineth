import { Box, Divider, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box padding={4}>
      <Heading as="h2" size="28px" mb={2}>
        what is Bitcoin Mining
      </Heading>
      <Text fontSize="14px" mb={2}>
        Bitcoin runs on a decentralized computer network or distributed ledger
        that tracks transactions in the cryptocurrency. When computers on the
        network verify and process transactions, new bitcoins are created, or
        mined. These networked computers, or miners, process the transaction in
        exchange for a payment in Bitcoin
      </Text>
      <Divider orientation="horizontal" mb={2} />
      <Heading as="h2" size="28px" mb={2}>
        what is ZNH
      </Heading>
      <Text fontSize="14px" mb={2}>
        Zenith Nova Hash (ZNH) is a revolutionary cryptocurrency designed to
        strengthen the Bitcoin blockchain through a unique approach. With a
        total token supply of only 5 Billion tokens and an ICO token price of
        $0.02, Zenith Nova Hash aims to raise $100 million to establish a
        state-of-the-art Bitcoin mining farm. The profits from this mining farm
        will be utilized to periodically burn ZNH tokens, leading to a
        deflationary mechanism that increases the value of ZNH tokens over time.
        This white paper elucidates the comprehensive strategy behind Zenith
        Nova Hash, its impact on the Bitcoin ecosystem, and the benefits it
        offers to token holders.
      </Text>
    </Box>
  );
};

export default AboutUs;
