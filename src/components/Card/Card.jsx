import React from 'react'
import { CardWrapper, Main, Title, Subtitle, Description, Time, Instructor, CardImg } from './Styles'
import amazon from '../../assets/img/courses/forensicsFull.svg'

const Card = ({
  progressBar = false,
  progressDone,
  variant,
  children,
  width = 230,
  height,
  className,
  img,
  title,
  subtitle,
  description,
  time,
  instructor,
  price,
  ...rest
}) => {
  return (
    <CardWrapper
      width={width}
      height={height}
      className={className}
      variant={variant}
      {...rest}
    >
      <CardImg src={amazon} alt="" />
      <Main>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <Time>{time}</Time>
        <Instructor>{instructor}</Instructor>
      </Main>
    </CardWrapper>
  )
}

export default Card
