import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionFaqProps } from 'types/api'

const SectionFaq = ({ questions, title }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>

        <S.Questions>
          {questions.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>I have another question!</Heading>
          <p>
            No problem! You can access any of{' '}
            <a
              href="https://willianjusten.com.br/about"
              target="_blank"
              rel="noreferrer"
            >
              my social networks
            </a>{' '}
            or get into the{' '}
            <a href="http://bit.ly/slack-will" target="_blank" rel="noreferrer">
              slack of our course.
            </a>
          </p>
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
