import {
  Badge,
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Link,
  Stack,
} from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";
import Layout from "../components/Layout";
import UrlInputField from "../components/UrlInputField";
import { useDeleteJobAdMutation, useJobAdsQuery } from "../generated/graphql";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  // TODO: jobAds pagination
  const { data, loading, error } = useJobAdsQuery();
  const [deleteJobAd] = useDeleteJobAdMutation();

  // collapse for description
  const [showDescription, setShowDescription] = React.useState(false);
  const handleToggle = () => setShowDescription(!showDescription);

  if (!loading && !data) {
    return (
      <div>
        <div>you got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  return (
    <Layout>
      <UrlInputField />
      {!data && loading ? (
        <Box>Loading...</Box>
      ) : (
        <>
          {data.jobAds.map((job, idx) => (
            <Stack p={5} shadow="md" borderWidth="1px" key={idx} mt={5}>
              {/* header */}
              <Flex justifyContent="space-between" pl={2}>
                <Box>
                  <Heading textAlign="center" as="h3" size="md">
                    {job.title}
                  </Heading>
                </Box>
                <Box>
                  {job.applied ? (
                    job.terminated ? (
                      <Badge variantColor="red">terminated</Badge>
                    ) : (
                      <Badge variantColor="teal">applied</Badge>
                    )
                  ) : (
                    <Badge variantColor="teal">to be applied</Badge>
                  )}
                </Box>
              </Flex>
              {/* body */}
              <Flex mt={4}>
                {/* right column - ad info */}
                <Box flex={3} background="GhostWhite" pb={4}>
                  <Box px={2}>
                    <Box background="lightGrey" borderRadius={5} px={2} mt={2}>
                      <span>Link: </span>
                      <Link href={job.link}>{job.link.match(/\w+.com/)}</Link>
                    </Box>
                    <Box background="lightGrey" borderRadius={5} px={2} mt={2}>
                      Posted at: {job.postedAt}
                    </Box>
                    <Box background="lightGrey" borderRadius={5} px={2} mt={2}>
                      {job.city}
                    </Box>
                    <Flex
                      background="lightGrey"
                      borderRadius={5}
                      px={2}
                      mt={2}
                      justify="space-between"
                    >
                      <Box>Company: {job.company.name} </Box>
                      {/* +job.fromRecruiter to backend */}
                      <Box>Recruiter</Box>
                    </Flex>
                    {/* job descr */}
                    <Box>
                      <Button
                        my={3}
                        variantColor="teal"
                        onClick={handleToggle}
                        variant="outline"
                      >
                        Job Description
                      </Button>
                    </Box>
                    <Collapse mt={2} isOpen={showDescription}>
                      <Box
                        pl={5}
                        // TODO: to be changed to react html parser
                        dangerouslySetInnerHTML={{
                          __html: `${job.description}`,
                        }}
                      />
                    </Collapse>
                    {/* Stacks */}
                    {job.stacks && (
                      <>
                        <Badge variantColor="teal" mt={5} mb={2}>
                          Stacks:
                        </Badge>
                        <Box
                          p={2}
                          borderWidth="1px"
                          borderRadius={5}
                          borderColor="darkGrey"
                        >
                          {job.stacks.map((stack, idx) => (
                            <Badge marginLeft="10px" key={idx}>
                              {stack}
                            </Badge>
                          ))}
                        </Box>
                      </>
                    )}

                    {/* other keywords */}
                    {job.softSkills && (
                      <>
                        <Badge variantColor="teal" mt={5} mb={2}>
                          Soft Skills:
                        </Badge>
                        <Box
                          p={2}
                          borderWidth="1px"
                          borderRadius={5}
                          borderColor="darkGrey"
                        >
                          {job.softSkills &&
                            job.softSkills.map((skill, idx) => (
                              <Badge marginLeft="10px" key={idx}>
                                {skill}
                              </Badge>
                            ))}
                        </Box>
                      </>
                    )}
                    {/* min experience */}
                    <Badge variantColor="teal" mt={5}>
                      Other:
                    </Badge>
                    {job.minYears ? (
                      <Box>{job.minYears}+ years experience</Box>
                    ) : null}
                    {/* degree */}
                    {job.degree ? <Box>CS degree</Box> : null}
                  </Box>
                </Box>
                {/* left column-applying status */}
                <Box flex={2} background="snow" pb={4}>
                  {/* <Box background="darkGrey" textAlign="center">
                Applying Status
              </Box> */}
                  <Box px={2}>
                    {job.applied && <Box>Applied at: {job.appliedAt}</Box>}
                    {/* documents */}
                    <Box mt={3}>
                      Cover Letter: <Badge>...</Badge>
                    </Box>
                    <Box>
                      Resume: <Badge>...</Badge>
                    </Box>
                    {/* contact details */}
                    <Box mt={3}>
                      {!job.contact ? (
                        // TODO: change this to a link
                        <Badge variantColor="teal">add a contact</Badge>
                      ) : (
                        <>
                          <Badge variantColor="teal">Contact:</Badge>
                          <Box>{job.contact && job.contact.name}</Box>
                          <Box>{job.contact && job.contact.phone}</Box>
                        </>
                      )}
                    </Box>
                    {/* follow up */}
                    {job.followups && (
                      <>
                        <Badge mt={3} variantColor="teal">
                          Followups
                        </Badge>
                        <Box mt={2}>
                          {job.followups.map((fo, idx) => (
                            <Box
                              key={idx}
                              p={1}
                              borderWidth="1px"
                              borderRadius={5}
                              borderColor="darkGrey"
                              my={1}
                              background={fo.isCurrentEvent ? "teal" : ""}
                              color={fo.isCurrentEvent ? "white" : ""}
                            >
                              <Box>Date: {fo.date}</Box>
                              <Box>Type: {fo.type}</Box>
                              <Box>Sumary: {fo.sumary}</Box>
                            </Box>
                          ))}
                        </Box>
                      </>
                    )}
                    {job.terminated && (
                      <Badge variantColor="red" mt={3}>
                        terminated
                      </Badge>
                    )}
                  </Box>
                </Box>
              </Flex>
              <Flex justifyContent="flex-end">
                <Box>
                  <NextLink href={`/updatejobad/${job.id}`}>
                    <Button mr={2}>Update</Button>
                  </NextLink>
                  <Button
                    mr={2}
                    onClick={() => deleteJobAd({ variables: { id: job.id } })}
                  >
                    Delete
                  </Button>
                </Box>
              </Flex>
            </Stack>
          ))}
        </>
      )}
    </Layout>
  );
};

export default Index;
