import { Box, Button, Heading, Stack } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import InputField from "../components/InputField";
import { useCreateAdByUrlMutation } from "../generated/graphql";

interface UrlInputFieldProps {}

const UrlInputField: React.FC<UrlInputFieldProps> = ({}) => {
  const initialValues = { url: "" };
  const [createAdByUrlMutation, { loading }] = useCreateAdByUrlMutation();
  return (
    <Stack p={5} shadow="md" borderWidth="1px" mt={5}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await createAdByUrlMutation({
            variables: {
              ...values,
            },
          });
        }}
      >
        {({}) => (
          <Form>
            <Box mb={2}>
              Add a job by submitting a url, currently only support url from
              seek
            </Box>
            <InputField name="url" />
            <Button
              type="submit"
              isLoading={loading}
              mt={4}
              variantColor="teal"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default UrlInputField;
