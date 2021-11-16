import React from 'react'
import styled from 'styled-components'

export type ContentProps = {}

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 8rem 4rem 4rem 4rem;
  border: 4px solid black;
  box-shadow: var(--container-shadow);
  background: repeating-radial-gradient(
      var(--color-secondary),
      var(--color-secondary) 6px,
      var(--color-primary) 6px,
      var(--color-primary) 10px,
      transparent 0%,
      transparent 100%
    ),
    repeating-radial-gradient(
      var(--color-secondary),
      var(--color-secondary) 6px,
      var(--color-primary) 6px,
      var(--color-primary) 10px,
      transparent 0%,
      transparent 100%
    ),
    linear-gradient(
      var(--color-primary-alt),
      var(--color-primary-alt) 60px,
      var(--color-primary) 60px,
      var(--color-primary) 64px
    );
  background-color: var(--color-secondary);
  background-position: right 5px, right 30px top 5px, 0 0;
  background-size: 50px 50px, 50px 50px, 100% 64px;
  background-repeat: no-repeat;
`

const SectionTitle = styled.h2`
  //font-family: var(--font-family-primary);
  font-size: clamp(2rem, 4vw, var(--font-size-h2));
`

const ContentWrapper = styled.div``
const Actions = styled.div``

const Container = ({}: ContentProps) => {
  return (
    <Wrapper>
      <SectionTitle>Featured Styles</SectionTitle>
      <ContentWrapper>
        <ul className="features">
          <li>
            <span>
              <a href="/styles/retro">
                Retro<span aria-hidden="true"></span>
              </a>
              <span>by Rachel B</span>
            </span>
          </li>
          <li>
            <span>
              <a href="/styles/vaporwave">
                Vaporwave<span aria-hidden="true"></span>
              </a>
              <span>by Shannon Crabill</span>
            </span>
          </li>
          <li>
            <span>
              <a href="/styles/barebones">
                Barebones<span aria-hidden="true"></span>
              </a>
              <span>by Vinícius Philot</span>
            </span>
          </li>
        </ul>
      </ContentWrapper>

      <Actions>
        <a href="/styles/" className="link-allstyles">
          View All Style
        </a>
      </Actions>
    </Wrapper>
  )
}

export default Container
