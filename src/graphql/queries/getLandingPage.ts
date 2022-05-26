import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          logo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
