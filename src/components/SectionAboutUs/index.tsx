import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

const SectionAboutUs = ({ authors, title }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.data.map(({ attributes: profile }) => (
        <ProfileCard key={profile.name} {...profile} />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
