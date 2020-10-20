import {
  Box,
  Input,
  InputProps,
  Flex,
  Checkbox,
  FormLabel,
  IconButton,
} from "@chakra-ui/core";
import { FieldArray, useField } from "formik";
import React, { InputHTMLAttributes } from "react";
import InputField from "./InputField";

type FollowUpsProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const FollowUps: React.FC<FollowUpsProps> = (props) => {
  const [field] = useField(props);
  return (
    <FieldArray name={field.name}>
      {({ remove, push }) => (
        <Box>
          <Flex justifyContent="space-between" my={2}>
            <FormLabel my={2}>Follow ups</FormLabel>
            <IconButton
              as="button"
              aria-label="add stack"
              icon="small-add"
              onClick={() =>
                push({
                  date: "",
                  type: "",
                  sumary: "",
                  current: false,
                })
              }
            />
          </Flex>
          {field.value.map((fp, index) => (
            <Box key={index}>
              <Flex justifyContent="space-between" mt={2}>
                <Checkbox size="lg" name={`followUps[${index}].current`} my={2}>
                  <FormLabel>Current Event</FormLabel>
                </Checkbox>
                <IconButton
                  as="button"
                  aria-label="delete event"
                  icon="small-close"
                  onClick={() => remove(index)}
                />
              </Flex>
              <InputField
                type="date"
                label="date"
                name={`followUps[${index}].date`}
              />
              <InputField label="Type" name={`followUps[${index}].type`} />
              <InputField
                textarea
                label="Sumary"
                name={`followUps[${index}].sumary`}
              />
            </Box>
          ))}
        </Box>
      )}
    </FieldArray>
  );
};

export default FollowUps;
