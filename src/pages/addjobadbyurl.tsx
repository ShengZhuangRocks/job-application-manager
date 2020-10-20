import { Button, Stack } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import Layout from "../components/Layout";
import { useCreateAdByUrlMutation } from "../generated/graphql";
import InputField from "../components/InputField";
import { useRouter } from "next/router";

interface JobAdByUrlProps {}

const JobAdByUrl: React.FC<JobAdByUrlProps> = ({}) => {
  const initialValues = { url: "" };
  const router = useRouter();
  const [createAdByUrl, { data, loading, error }] = useCreateAdByUrlMutation();
  return (
    <Layout>
      <Stack p={5} shadow="md" borderWidth="1px" my="30px">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            const response = await createAdByUrl({
              variables: {
                ...values,
              },
            });
            console.log(response);
            if (!response.errors) {
              router.push("/");
            }
          }}
        >
          <Form>
            <InputField label="url" name="url" />
            <Button
              type="submit"
              isLoading={loading}
              mt={4}
              variantColor="teal"
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Stack>
    </Layout>
  );
};

export default JobAdByUrl;
