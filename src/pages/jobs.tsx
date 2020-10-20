import {
  Box,
  Stack,
  Checkbox,
  Badge,
  Collapse,
  Button,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/core";
import React from "react";
import JobAd from "../components/JobAd";
import Layout from "../components/Layout";
import Wraper from "../components/wraper";
import { jobApplications } from "./mockdata";

interface JobsProps {}

const Jobs: React.FC<JobsProps> = ({}) => {
  const data = jobApplications;
  const [showDescr, setShowDescr] = React.useState(false);
  const handleToggle = () => setShowDescr(!showDescr);
  return (
    <Layout>
      <Box>to be filled</Box>
    </Layout>
  );
};

export default Jobs;
