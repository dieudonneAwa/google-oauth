import { Flex, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

const GoogleWrapper = styled(Flex)`
  background-color: white;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black !important;
    font-weight: bold !important;
  }
`;

const axiosApiCall = (url, method, body = {}) =>
  axios({
    method,
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
    data: body,
  });

const Index = () => {
  const router = useRouter();

  const onSuccess = (response) => {
    const access_token = response.accessToken;
    axiosApiCall("oauth/google", "post", { access_token }).then((res) => {
      const { user, token } = res.data;
      Cookie.set("token", token);
      router.push("/");
    });
  };

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      bg="green.800"
      height="100vh"
    >
      <Heading maxW="800px" color="white" textAlign="center">
        Google Oauth in Next.js, Node.js, and Express Application
      </Heading>
      <GoogleWrapper w="300px" mt="3rem">
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          buttonText="Sign up with Google"
          onSuccess={onSuccess}
          onFailure={() => {}}
        />
      </GoogleWrapper>
    </Flex>
  );
};

export default Index;
