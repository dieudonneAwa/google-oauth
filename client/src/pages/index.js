import { Flex, Heading } from "@chakra-ui/react";

const Index = () => (
  <Flex
    flexDir="column"
    align="center"
    justify="center"
    bg="green.800"
    height="100vh"
  >
    <Heading maxW="600px" color="white" textAlign="center">
      Welcome to Google Oauth in Next.js Application
    </Heading>
  </Flex>
);

export default Index;
