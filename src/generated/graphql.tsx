import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  contacts: Array<Contact>;
  contact?: Maybe<Contact>;
  hello: Scalars['String'];
  jobAds: Array<JobAd>;
  jobAdById: JobAd;
  adsByCompany: JobAdsResponse;
  jobAdByContact: JobAdsResponse;
};


export type QueryContactArgs = {
  id: Scalars['Float'];
};


export type QueryJobAdByIdArgs = {
  id: Scalars['Int'];
};


export type QueryAdsByCompanyArgs = {
  companyName: Scalars['String'];
};


export type QueryJobAdByContactArgs = {
  phoneNumber: Scalars['String'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Float'];
  name: Scalars['String'];
  contacts: Array<Contact>;
  jobAds: Array<JobAd>;
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['Float'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  jobAds: Array<JobAd>;
  companyId: Scalars['Float'];
  company: Company;
};

export type JobAd = {
  __typename?: 'JobAd';
  id: Scalars['Float'];
  title: Scalars['String'];
  link: Scalars['String'];
  postedAt?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  jobType?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  stacks?: Maybe<Array<Scalars['String']>>;
  softSkills?: Maybe<Array<Scalars['String']>>;
  degree?: Maybe<Scalars['Boolean']>;
  minYears?: Maybe<Scalars['Float']>;
  applied?: Maybe<Scalars['Boolean']>;
  appliedAt?: Maybe<Scalars['String']>;
  terminated?: Maybe<Scalars['Boolean']>;
  contact?: Maybe<Contact>;
  company: Company;
  followups: Array<Followup>;
};

export type Followup = {
  __typename?: 'Followup';
  id: Scalars['Float'];
  date: Scalars['String'];
  type: Scalars['String'];
  sumary?: Maybe<Scalars['String']>;
  isCurrentEvent: Scalars['Boolean'];
};

export type JobAdsResponse = {
  __typename?: 'JobAdsResponse';
  ads?: Maybe<Array<JobAd>>;
  errors?: Maybe<Array<FieldErrors>>;
};

export type FieldErrors = {
  __typename?: 'FieldErrors';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  insert: Scalars['Boolean'];
  createContact: Contact;
  deleteFollowup: Scalars['Boolean'];
  createFollowups: FollowupResponse;
  createAd: Scalars['Boolean'];
  updateJobAd: JobAdResponse;
  deleteJobAd: Scalars['Boolean'];
  createJobAdByUrl: JobAdResponse;
};


export type MutationInsertArgs = {
  name: Scalars['String'];
};


export type MutationCreateContactArgs = {
  companyName: Scalars['String'];
  phone: Scalars['String'];
  name: Scalars['String'];
};


export type MutationDeleteFollowupArgs = {
  jobAdId: Scalars['Float'];
  followupId: Scalars['Float'];
};


export type MutationCreateFollowupsArgs = {
  input: UpdateFollowupInput;
};


export type MutationCreateAdArgs = {
  input: JobAdInput;
};


export type MutationUpdateJobAdArgs = {
  input: UpdatejobAdInput;
};


export type MutationDeleteJobAdArgs = {
  id: Scalars['Int'];
};


export type MutationCreateJobAdByUrlArgs = {
  url: Scalars['String'];
};

export type FollowupResponse = {
  __typename?: 'FollowupResponse';
  followup?: Maybe<Followup>;
  errors?: Maybe<Array<FieldErrors>>;
};

export type UpdateFollowupInput = {
  jobAdId: Scalars['Float'];
  followup: FollowupInput;
};

export type FollowupInput = {
  id?: Maybe<Scalars['Int']>;
  date: Scalars['String'];
  type: Scalars['String'];
  sumary?: Maybe<Scalars['String']>;
  isCurrentEvent?: Maybe<Scalars['Float']>;
};

export type JobAdInput = {
  title: Scalars['String'];
  link: Scalars['String'];
  postedAt: Scalars['String'];
  description: Scalars['String'];
  companyName: Scalars['String'];
  contactName: Scalars['String'];
  contactNumber: Scalars['String'];
};

export type JobAdResponse = {
  __typename?: 'JobAdResponse';
  ad?: Maybe<JobAd>;
  errors?: Maybe<Array<FieldErrors>>;
};

export type UpdatejobAdInput = {
  id: Scalars['Int'];
  jobType?: Maybe<Scalars['String']>;
  stacks?: Maybe<Array<Scalars['String']>>;
  softSkills?: Maybe<Array<Scalars['String']>>;
  degree?: Maybe<Scalars['Int']>;
  minYears?: Maybe<Scalars['Int']>;
  contactName?: Maybe<Scalars['String']>;
  contactNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  applied?: Maybe<Scalars['Int']>;
  appliedAt?: Maybe<Scalars['String']>;
  terminated?: Maybe<Scalars['Int']>;
  followups?: Maybe<Array<FollowupInput>>;
};

export type CompanyFragFragment = (
  { __typename?: 'Company' }
  & Pick<Company, 'id' | 'name'>
);

export type ContactFragFragment = (
  { __typename?: 'Contact' }
  & Pick<Contact, 'id' | 'name' | 'phone' | 'email'>
);

export type FollowupFragFragment = (
  { __typename?: 'Followup' }
  & Pick<Followup, 'id' | 'date' | 'type' | 'sumary' | 'isCurrentEvent'>
);

export type JobAdFragFragment = (
  { __typename?: 'JobAd' }
  & Pick<JobAd, 'id' | 'title' | 'link' | 'postedAt' | 'city' | 'jobType' | 'description' | 'stacks' | 'softSkills' | 'degree' | 'minYears' | 'applied' | 'appliedAt' | 'terminated'>
  & { contact?: Maybe<(
    { __typename?: 'Contact' }
    & ContactFragFragment
  )>, company: (
    { __typename?: 'Company' }
    & CompanyFragFragment
  ), followups: Array<(
    { __typename?: 'Followup' }
    & FollowupFragFragment
  )> }
);

export type CreateAdByUrlMutationVariables = Exact<{
  url: Scalars['String'];
}>;


export type CreateAdByUrlMutation = (
  { __typename?: 'Mutation' }
  & { createJobAdByUrl: (
    { __typename?: 'JobAdResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldErrors' }
      & Pick<FieldErrors, 'field' | 'message'>
    )>>, ad?: Maybe<(
      { __typename?: 'JobAd' }
      & JobAdFragFragment
    )> }
  ) }
);

export type DeleteJobAdMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteJobAdMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteJobAd'>
);

export type UpdateJobAdMutationVariables = Exact<{
  input: UpdatejobAdInput;
}>;


export type UpdateJobAdMutation = (
  { __typename?: 'Mutation' }
  & { updateJobAd: (
    { __typename?: 'JobAdResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldErrors' }
      & Pick<FieldErrors, 'field' | 'message'>
    )>>, ad?: Maybe<(
      { __typename?: 'JobAd' }
      & JobAdFragFragment
    )> }
  ) }
);

export type JobAdByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type JobAdByIdQuery = (
  { __typename?: 'Query' }
  & { jobAdById: (
    { __typename?: 'JobAd' }
    & JobAdFragFragment
  ) }
);

export type JobAdsQueryVariables = Exact<{ [key: string]: never; }>;


export type JobAdsQuery = (
  { __typename?: 'Query' }
  & { jobAds: Array<(
    { __typename?: 'JobAd' }
    & JobAdFragFragment
  )> }
);

export const ContactFragFragmentDoc = gql`
    fragment ContactFrag on Contact {
  id
  name
  phone
  email
}
    `;
export const CompanyFragFragmentDoc = gql`
    fragment CompanyFrag on Company {
  id
  name
}
    `;
export const FollowupFragFragmentDoc = gql`
    fragment FollowupFrag on Followup {
  id
  date
  type
  sumary
  isCurrentEvent
}
    `;
export const JobAdFragFragmentDoc = gql`
    fragment JobAdFrag on JobAd {
  id
  title
  link
  postedAt
  city
  jobType
  description
  stacks
  softSkills
  degree
  minYears
  applied
  appliedAt
  terminated
  contact {
    ...ContactFrag
  }
  company {
    ...CompanyFrag
  }
  followups {
    ...FollowupFrag
  }
}
    ${ContactFragFragmentDoc}
${CompanyFragFragmentDoc}
${FollowupFragFragmentDoc}`;
export const CreateAdByUrlDocument = gql`
    mutation CreateAdByUrl($url: String!) {
  createJobAdByUrl(url: $url) {
    errors {
      field
      message
    }
    ad {
      ...JobAdFrag
    }
  }
}
    ${JobAdFragFragmentDoc}`;
export type CreateAdByUrlMutationFn = Apollo.MutationFunction<CreateAdByUrlMutation, CreateAdByUrlMutationVariables>;

/**
 * __useCreateAdByUrlMutation__
 *
 * To run a mutation, you first call `useCreateAdByUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdByUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdByUrlMutation, { data, loading, error }] = useCreateAdByUrlMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useCreateAdByUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdByUrlMutation, CreateAdByUrlMutationVariables>) {
        return Apollo.useMutation<CreateAdByUrlMutation, CreateAdByUrlMutationVariables>(CreateAdByUrlDocument, baseOptions);
      }
export type CreateAdByUrlMutationHookResult = ReturnType<typeof useCreateAdByUrlMutation>;
export type CreateAdByUrlMutationResult = Apollo.MutationResult<CreateAdByUrlMutation>;
export type CreateAdByUrlMutationOptions = Apollo.BaseMutationOptions<CreateAdByUrlMutation, CreateAdByUrlMutationVariables>;
export const DeleteJobAdDocument = gql`
    mutation DeleteJobAd($id: Int!) {
  deleteJobAd(id: $id)
}
    `;
export type DeleteJobAdMutationFn = Apollo.MutationFunction<DeleteJobAdMutation, DeleteJobAdMutationVariables>;

/**
 * __useDeleteJobAdMutation__
 *
 * To run a mutation, you first call `useDeleteJobAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJobAdMutation, { data, loading, error }] = useDeleteJobAdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJobAdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJobAdMutation, DeleteJobAdMutationVariables>) {
        return Apollo.useMutation<DeleteJobAdMutation, DeleteJobAdMutationVariables>(DeleteJobAdDocument, baseOptions);
      }
export type DeleteJobAdMutationHookResult = ReturnType<typeof useDeleteJobAdMutation>;
export type DeleteJobAdMutationResult = Apollo.MutationResult<DeleteJobAdMutation>;
export type DeleteJobAdMutationOptions = Apollo.BaseMutationOptions<DeleteJobAdMutation, DeleteJobAdMutationVariables>;
export const UpdateJobAdDocument = gql`
    mutation UpdateJobAd($input: UpdatejobAdInput!) {
  updateJobAd(input: $input) {
    errors {
      field
      message
    }
    ad {
      ...JobAdFrag
    }
  }
}
    ${JobAdFragFragmentDoc}`;
export type UpdateJobAdMutationFn = Apollo.MutationFunction<UpdateJobAdMutation, UpdateJobAdMutationVariables>;

/**
 * __useUpdateJobAdMutation__
 *
 * To run a mutation, you first call `useUpdateJobAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJobAdMutation, { data, loading, error }] = useUpdateJobAdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateJobAdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJobAdMutation, UpdateJobAdMutationVariables>) {
        return Apollo.useMutation<UpdateJobAdMutation, UpdateJobAdMutationVariables>(UpdateJobAdDocument, baseOptions);
      }
export type UpdateJobAdMutationHookResult = ReturnType<typeof useUpdateJobAdMutation>;
export type UpdateJobAdMutationResult = Apollo.MutationResult<UpdateJobAdMutation>;
export type UpdateJobAdMutationOptions = Apollo.BaseMutationOptions<UpdateJobAdMutation, UpdateJobAdMutationVariables>;
export const JobAdByIdDocument = gql`
    query JobAdByID($id: Int!) {
  jobAdById(id: $id) {
    ...JobAdFrag
  }
}
    ${JobAdFragFragmentDoc}`;

/**
 * __useJobAdByIdQuery__
 *
 * To run a query within a React component, call `useJobAdByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobAdByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobAdByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJobAdByIdQuery(baseOptions?: Apollo.QueryHookOptions<JobAdByIdQuery, JobAdByIdQueryVariables>) {
        return Apollo.useQuery<JobAdByIdQuery, JobAdByIdQueryVariables>(JobAdByIdDocument, baseOptions);
      }
export function useJobAdByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobAdByIdQuery, JobAdByIdQueryVariables>) {
          return Apollo.useLazyQuery<JobAdByIdQuery, JobAdByIdQueryVariables>(JobAdByIdDocument, baseOptions);
        }
export type JobAdByIdQueryHookResult = ReturnType<typeof useJobAdByIdQuery>;
export type JobAdByIdLazyQueryHookResult = ReturnType<typeof useJobAdByIdLazyQuery>;
export type JobAdByIdQueryResult = Apollo.QueryResult<JobAdByIdQuery, JobAdByIdQueryVariables>;
export const JobAdsDocument = gql`
    query JobAds {
  jobAds {
    ...JobAdFrag
  }
}
    ${JobAdFragFragmentDoc}`;

/**
 * __useJobAdsQuery__
 *
 * To run a query within a React component, call `useJobAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobAdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobAdsQuery(baseOptions?: Apollo.QueryHookOptions<JobAdsQuery, JobAdsQueryVariables>) {
        return Apollo.useQuery<JobAdsQuery, JobAdsQueryVariables>(JobAdsDocument, baseOptions);
      }
export function useJobAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobAdsQuery, JobAdsQueryVariables>) {
          return Apollo.useLazyQuery<JobAdsQuery, JobAdsQueryVariables>(JobAdsDocument, baseOptions);
        }
export type JobAdsQueryHookResult = ReturnType<typeof useJobAdsQuery>;
export type JobAdsLazyQueryHookResult = ReturnType<typeof useJobAdsLazyQuery>;
export type JobAdsQueryResult = Apollo.QueryResult<JobAdsQuery, JobAdsQueryVariables>;