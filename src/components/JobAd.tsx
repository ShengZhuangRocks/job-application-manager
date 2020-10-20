import { Stack, Box } from "@chakra-ui/core";
import React from "react";

interface JobAdProps {
  ad: {
    title: string;
    link: string;
    postedAt: string; // may be date
    company: string;
    area: string;
    description: string;
  };
}

const JobAd: React.FC<JobAdProps> = ({ ad }) => {
  return (
    <Stack p={5} borderWidth="1px">
      <Box contentEditable={true}>
        <span>Title: </span>
        {ad.title}
      </Box>
      <Box>
        <span>Company: </span>
        {ad.company}
      </Box>
      <Box>
        <span>AD Link: </span>
      </Box>
      <Box>
        <span>Contact: </span>
      </Box>
    </Stack>
  );
};

export default JobAd;
