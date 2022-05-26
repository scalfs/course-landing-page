interface FileEntity<File> {
  id: number
  attributes: File
}

interface EntityResponse<FileEntity> {
  data: FileEntity
}

export type LogoProps = {
  url: string
  alternativeText: string
}

export type LandingPageProps = {
  logo: LogoProps
}

interface LandingPage {
  logo: EntityResponse<FileEntity<LogoProps>>
}

export type LandingPageEntityResponse = {
  landingPage: EntityResponse<FileEntity<LandingPage>>
}
