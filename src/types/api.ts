interface EntityResponse<File> {
  data: { id: number; attributes: File }
}

interface RelationResponseCollection<File> {
  data: { id: number; attributes: File }[]
}

interface ImageProps {
  url: string
  alternativeText: string
}

export type LogoProps = ImageProps

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: EntityResponse<ImageProps>
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: EntityResponse<ImageProps>
}

type TechIcon = {
  label: string
  icon: EntityResponse<ImageProps>
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: { title: string }[]
}

type Module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallments: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type Author = {
  photo: EntityResponse<ImageProps>
  name: string
  role: string
  socialLinks: {
    title: string
    url: string
  }[]
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: RelationResponseCollection<Author>
}

type Review = {
  name: string
  text: string
  photo: EntityResponse<ImageProps>
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: {
    question: string
    answer: string
  }[]
}

export type LandingPageProps = {
  logo: EntityResponse<LogoProps>
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}

export type LandingPageEntityResponse = {
  landingPage: EntityResponse<LandingPageProps>
}
