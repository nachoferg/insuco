/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewcodbinsucoes = /* GraphQL */ `
  query GetNewcodbinsucoes($id: ID!) {
    getNewcodbinsucoes(id: $id) {
      id
      pk
      sk
      qiD
      duration
      smoker
      gender
      quote
      age
      createdAt
      updatedAt
    }
  }
`;
export const listNewcodbinsucoess = /* GraphQL */ `
  query ListNewcodbinsucoess(
    $filter: ModelnewcodbinsucoesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewcodbinsucoess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pk
        sk
        qiD
        duration
        smoker
        gender
        quote
        age
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
