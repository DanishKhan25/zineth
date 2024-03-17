import { Button } from "@chakra-ui/react";

const CustomBtn = ({ children, colorScheme, ...rest }) => {
  return (
    <Button colorScheme={colorScheme} {...rest}>
      {children}
    </Button>
  );
};

export default CustomBtn;
