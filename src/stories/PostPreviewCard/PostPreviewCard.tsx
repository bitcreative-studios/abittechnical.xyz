import React from 'react'
import tw, { styled } from 'twin.macro'

const PreviewCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr min-content;
  grid-auto-rows: min-content;

  ${tw`relative max-w-[430px] min-w-[380px] flex-grow bg-gray-50 font-text font-light uppercase shadow`}
`

const PreviewCardTitle = styled.h1`
  grid-column: 1 / -1;
  grid-row: 2;
  font-size: clamp(2.2rem, 4.2vw, 3rem);
  border-bottom: 0.5px dashed;
  ${tw``}
  ${tw`py-3 px-5 font-display`}
`
const PreviewCardWeight = styled.div`
  grid-row: 7 / span 1;
  grid-column: 3 / 4;
  min-height: 10rem;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  border-bottom: 0.5px dashed;
  font-size: 85%;
  ${tw`py-5`}
`
const PreviewCardInfo = styled.div`
  grid-column: 1 / span 2;
  border-bottom: 0.5px dashed;
  border-right: 0.5px dashed;
  ${tw`py-3 px-5`}
`
const PreviewCardLocation = styled.div`
  grid-column: 1 / span 2;
  border-bottom: 0.5px dashed;
  border-right: 0.5px dashed;
  ${tw`py-3 px-5`}
`
const PreviewCardDate = styled.div`
  grid-row: 3 / span 4;
  grid-column: 3 / 4;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  font-size: 85%;
  ${tw`py-5`}
`

const PreviewCardType = styled.div`
  grid-column: 1 / span 2;
  border-right: 0.5px dashed;
  ${tw`py-3 px-5`}
`
const PreviewCardFootnote = styled.span`
  grid-column: 1 / 2;
  border-right: 0.5px dashed;
  font-size: 85%;
  ${tw`py-3 px-5`}
`
const PreviewCardStrip = styled.span`
  grid-column: 1 / 3;
  grid-row: 1;
  ${tw``}
`
const PreviewCardSideTitle = styled.div`
  display: inline-block;
  margin-bottom: 0.75rem;
  border-bottom: 0.5px dashed;
  padding: 0 0.8rem 0.75rem;
  ${tw`space-x-2`}
`
const PreviewCardDecorativeSquare = styled.span`
  background: black;
  &.one {
    grid-row: 1;
    grid-column: 3/4;
    height: 2.5rem;
  }
  &.two {
    height: 2.5rem;
  }
  ${tw``}
`

const PreviewCardSite = styled.div`
  ${tw`py-3 px-4`}
`

const PreviewCardCheckbox = styled.div`
  display: inline-flex;
  align-content: center;
  pointer-events: none;

  &:nth-child(1) {
    margin-right: 30px;
  }

  input {
    height: 0;
    width: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;

    &:checked + label:after {
      content: '';
      position: absolute;
      width: 22px;
      height: 5px;
      background: black;
      left: 3px;
      transform: rotate(-45deg);
      top: 10px;
      border-radius: 5px;
    }
  }

  label {
    padding: 5px 20px 5px 30px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      border: 1px dashed;
      width: 18px;
      height: 18px;
      left: 0;
    }
  }
`

const PreviewCardImage = styled.div`
  grid-column: 1 / span 2;
  grid-row: 6 / span 2;
  min-height: 16.5rem;
  background-repeat: repeat;
  background-image: repeating-radial-gradient(
      circle at 60%,
      #eee,
      #eee 3px,
      transparent 4px,
      #eee 5px
    ),
    repeating-radial-gradient(
      circle at 45%,
      #999,
      #999 3px,
      transparent 4px,
      #999 5px
    );
  background-image: repeating-radial-gradient(
    ellipse at right,
    #888 10%,
    #888 1px,
    transparent 1px,
    transparent 3px,
    #888 3px,
    #888 4px,
    transparent 4px,
    transparent 5px,
    #888 5px,
    #888 6px,
    transparent 6px,
    #888 6px,
    #888 7px,
    transparent 7px,
    transparent 8px,
    #888 8px,
    #888 9px,
    transparent 9px,
    transparent 10px
  );
  background-size: 20px 40px;
  ${tw``}
`

export type PostPreviewCardProps = {}
const PostPreviewCard = () => {
  return (
    <PreviewCardWrapper>
      <PreviewCardTitle className="name">
        Smalltalk
        <br />
        about MVC
      </PreviewCardTitle>
      <PreviewCardInfo className="info">
        <span>Software Architecture</span> / <span>Frontend</span> /{' '}
        <span>Theory</span> / <span>Computer Science</span>
      </PreviewCardInfo>
      <PreviewCardLocation className="location">
        Bahia,<span tw="font-bold">Brazil</span>
      </PreviewCardLocation>
      <PreviewCardType className="type">
        <PreviewCardCheckbox className="checkbox">
          <input type="checkbox" id="espresso" />
          <label htmlFor="espresso">Read</label>
        </PreviewCardCheckbox>
        <PreviewCardCheckbox className="checkbox">
          <input type="checkbox" id="filter" checked={true} />
          <label htmlFor="filter">Shared</label>
        </PreviewCardCheckbox>
      </PreviewCardType>
      <PreviewCardDate className="date">
        <PreviewCardSideTitle className="side-title">
          Committed
        </PreviewCardSideTitle>
        20.08.2020
      </PreviewCardDate>
      <PreviewCardWeight className="weight">
        <PreviewCardSideTitle className="side-title">
          Readers
        </PreviewCardSideTitle>
        250G
      </PreviewCardWeight>
      <PreviewCardFootnote className="footnote">
        Roasted in Malaysia
      </PreviewCardFootnote>
      <PreviewCardSite tw="text-[85%]" className="site">
        e789209
      </PreviewCardSite>
      <PreviewCardImage />
      <PreviewCardDecorativeSquare className="one" />
      <PreviewCardDecorativeSquare className="two" />
      <PreviewCardStrip className="strip" />
    </PreviewCardWrapper>
  )
}

export default PostPreviewCard
