import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment imageData on UploadFileEntityResponse {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }

  fragment logo on LandingPage {
    logo {
      ...imageData
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        ...imageData
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        ...imageData
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        icon {
          ...imageData
        }
        label
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts(pagination: { limit: 20 }) {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallments
      benefits
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        data {
          attributes {
            photo {
              ...imageData
            }
            name
            role
            socialLinks {
              title
              url
            }
            description
          }
        }
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        name
        text
        photo {
          ...imageData
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
          ...sectionAboutProject
          ...sectionTech
          ...sectionConcepts
          ...sectionModules
          ...sectionAgenda
          ...pricingBox
          ...sectionAboutUs
          ...sectionReviews
          ...sectionFaq
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
