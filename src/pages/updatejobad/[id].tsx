import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormLabel,
  Stack,
} from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import FollowUps from "../../components/FollowUps";
import InputArray from "../../components/InputArray";
import InputField from "../../components/InputField";
import Layout from "../../components/Layout";
import { getIdFromUrl } from "./../../utils/getId";
import {
  JobAdFragFragment,
  useJobAdByIdQuery,
} from "./../../generated/graphql";

interface UpdatejobadProps {}

const Updatejobad: React.FC<UpdatejobadProps> = ({}) => {
  const id = getIdFromUrl();
  // 1. get initial values from query the jobAd
  const { data, loading, error } = useJobAdByIdQuery({
    variables: { id },
  });

  // 2. updateJobAd hook

  if (error) {
    // TODO: should redirect to home page
    <Box>fail to fetch jobAd of current id, go back and retry</Box>;
  }
  const initialValues = data.jobAdById;
  console.log(initialValues);
  return (
    <Layout>
      {!data && loading ? (
        <Box>Loading</Box>
      ) : (
        <Stack p={5} shadow="md" borderWidth="1px" marginY="30px">
          <Box> Hi there </Box>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <Box>
                  <InputField label="Title" name="title" />
                </Box>
                {/* TODO: add more fields */}
                <Button type="submit" mt={4} variantColor="teal">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Stack>
      )}
    </Layout>
  );
};

export default Updatejobad;

/**
 * 
 <Stack p={5} shadow="md" borderWidth="1px" marginY="30px">
          <Box> Hi there </Box>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log(values);
            }}
          >
            {({ values }) => (
              <Form>
                <Box>
                  <InputField label="Title" name="title" />
                  <InputField label="Job Link" name="link" />
                  <InputField label="Posted at" name="postedAt" />
                  <InputField label="Area" name="area" />
                  <InputField label="Company" name="company" />
                  <InputField
                    label="Job Description"
                    name="description"
                    textarea
                  />
                  <InputArray name="requirements.stacks" />
                  <InputArray name="requirements.softSkills" />
                  <InputField
                    label="Min. years of experience"
                    name="requirements.minYears"
                  />
                  <Checkbox size="lg" name="requirements.degree" my={2}>
                    <FormLabel>CS Degree</FormLabel>
                  </Checkbox>
                </Box>

                <Divider borderColor="red.200" my={5} />

                <Box>
                  <Checkbox size="lg" name="applied" my={2}>
                    <FormLabel>Applied at:</FormLabel>
                  </Checkbox>
                  <InputField type="date" name="appliedAt" />
                  <Box my={2}>
                    <InputField label="Contact Person" name="contact.person" />
                    <InputField label="Contact Number" name="contact.phone" />
                  </Box>
                  <Divider borderColor="red.200" my={5} />
                  <FollowUps name="followUps" />
                </Box>

                <Button type="submit" mt={4} variantColor="teal">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Stack>
 */
