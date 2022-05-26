import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'
import PricingBox from 'components/PricingBox'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionAgenda from 'components/SectionAgenda'
import SectionConcepts from 'components/SectionConcepts'
import SectionFaq from 'components/SectionFaq'
import SectionHero from 'components/SectionHero'
import SectionModules from 'components/SectionModules'
import SectionReviews from 'components/SectionReviews'
import SectionTech from 'components/SectionTech'
import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { GetStaticProps } from 'next'
import React from 'react'
import { LandingPageEntityResponse, LandingPageProps } from 'types/api'

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
  pricingBox,
  sectionAboutUs,
  sectionReviews,
  sectionFaq
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo.data.attributes} header={header} />
    <SectionAboutProject {...sectionAboutProject} />
    <SectionTech {...sectionTech} />
    <SectionConcepts {...sectionConcepts} />
    <SectionModules {...sectionModules} />
    <SectionAgenda {...sectionAgenda} />
    <PricingBox {...pricingBox} />
    <SectionAboutUs {...sectionAboutUs} />
    <SectionReviews {...sectionReviews} />
    <SectionFaq {...sectionFaq} />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  const { landingPage } = await client.request<LandingPageEntityResponse>(
    GET_LANDING_PAGE
  )

  return {
    props: {
      ...landingPage.data.attributes
    }
  }
}

export default Index
