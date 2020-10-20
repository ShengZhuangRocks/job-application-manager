import { Box, IconButton, Flex, FormLabel } from "@chakra-ui/core";
import { FieldArray, useField } from "formik";
import React, { InputHTMLAttributes } from "react";
import InputField from "./InputField";

type InputArrayProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const InputArray: React.FC<InputArrayProps> = (props) => {
  const [field] = useField(props);
  return (
    <FieldArray name={field.name}>
      {({ remove, push }) => (
        <Box>
          <Flex justifyContent="space-between" my={2}>
            <FormLabel>
              {field.name === "requirements.stacks" ? "Stacks" : "Soft Skills"}
            </FormLabel>
            <IconButton
              as="button"
              aria-label="add stack"
              icon="small-add"
              onClick={() => push("")}
            />
          </Flex>
          {field.value.length > 0 &&
            field.value.map((stack: string, index: number) => (
              <Flex justifyContent="space-between" my={1} key={index}>
                <InputField
                  name={`${field.name}[${index}]`}
                  placeholder={stack}
                />
                <IconButton
                  as="button"
                  aria-label="delete stack"
                  icon="small-close"
                  onClick={() => remove(index)}
                />
              </Flex>
            ))}
        </Box>
      )}
    </FieldArray>
  );
};

export default InputArray;
