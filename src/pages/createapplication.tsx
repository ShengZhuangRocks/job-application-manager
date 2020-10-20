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
import FollowUps from "../components/FollowUps";
import InputArray from "../components/InputArray";
import Layout from "../components/Layout";
import AppForm from "../types";
import InputField from "./../components/InputField";

interface CreateApplicationProps {}

const CreateApplication: React.FC<CreateApplicationProps> = ({}) => {
  const initialValues: AppForm = {
    title: "",
    link: "",
    postedAt: "",
    company: "",
    area: "",
    description: "",

    fromRecruiter: false,
    requirements: {
      stacks: ["Javascript"],
      softSkills: ["Communication"],
      degree: false,
      minYears: 0,
    },
    applied: false,
    appliedAt: "",
    coverLetter: "",
    resume: "",
    contact: {
      person: "",
      phone: "",
    },
    followUps: [
      {
        date: new Date(),
        type: "email",
        sumary: "",
        current: true,
      },
    ],
    terminated: false,
  };

  return (
    <Layout>
      <Stack p={5} shadow="md" borderWidth="1px" marginY="30px">
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
                {/* need to change applied at data type */}
                <InputField type="date" name="appliedAt" />
                {/* handle file upload for resume and cover letter */}
                <Box my={2}>
                  <InputField label="Contact Person" name="contact.person" />
                  <InputField label="Contact Number" name="contact.phone" />
                </Box>
                {/* follow ups */}
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
    </Layout>
  );
};

export default CreateApplication;
