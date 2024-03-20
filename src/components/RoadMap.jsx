import { Box, Divider, List, ListItem } from "@chakra-ui/react";

const RoadMap = () => {
  return (
    <Box padding={4}>
      <List listStyleType="none">
        <ListItem fontSize="14px">
          &#9679; Establishment of the Mining Farm: Initial setup and deployment
          of the Bitcoin mining farm infrastructure.
        </ListItem>
        <Divider orientation="horizontal" mt={2} mb={2} />
        <ListItem fontSize="14px">
          &#9679; Commencement of Operations: Activation of mining operations
          and commencement of token burning cycles.
        </ListItem>
        <Divider orientation="horizontal" mt={2} mb={2} />
        <ListItem fontSize="14px">
          &#9679; Community Engagement: Ongoing engagement with the community to
          solicit feedback and enhance the project&apos;s efficacy.
        </ListItem>
      </List>
    </Box>
  );
};

export default RoadMap;
