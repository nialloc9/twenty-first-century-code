import Styled from "styled-components";
import { remCalc } from "../../../common/helpers";
import { MOBILE_SCREEN, TABLET_HORIZONTAL_SCREEN } from '../../../common/settings';

const Block = Styled("div")`
    margin: ${({ margin = 0 }) => margin};
    padding: ${({ padding = 0 }) => padding};
    ${({ height = false }) => height && `height: ${height};`}
    ${({ lineHeight = false }) => lineHeight && `line-height: ${lineHeight};`}
    ${({ textAlign = false }) => textAlign && `text-align: ${textAlign};`}
    ${({ verticalAlign = false }) => verticalAlign && `vertical-align: ${verticalAlign};`}
    ${({ display = false }) => display && `display: ${display};`}
    ${({ backgroundColor = false }) => backgroundColor && `background-color: ${backgroundColor};`}
    ${({ backgroundImage = false }) => backgroundImage && `background-image: ${backgroundImage};`}
    ${({ backgroundPosition = false }) => backgroundPosition && `background-position: ${backgroundPosition};`}
    ${({ backgroundPositionY = false }) => backgroundPositionY && `background-position-y: ${backgroundPositionY};`}
    ${({ backgroundRepeat = false }) => backgroundRepeat && `background-repeat: ${backgroundRepeat};`}
    ${({ backgroundSize = false }) => backgroundSize && `background-size: ${backgroundSize};`}
    ${({ position = false }) => position && `position: ${position};`}
    ${({ width = false }) => width && `width: ${width};`};
    ${({ float = false }) => float && `float: ${float};`}
    ${({ border = false }) => border && `border: ${border};`}
    ${({ opacity = false }) => opacity && `opacity: ${opacity};`}
    ${({ minHeight = false }) => minHeight && `min-height: ${minHeight};`}
    ${({ maxHeight = false }) => maxHeight && `max-height: ${maxHeight};`}
    ${({ maxWidth = false }) => maxWidth && `max-width: ${maxWidth};`}
    ${({ fontSize = false }) => fontSize && `font-size: ${remCalc(fontSize)};`}
    ${({ wordSpacing = false }) => wordSpacing && `word-spacing: ${wordSpacing};`}
    ${({ color = false }) => color && `color: ${color};`}
    ${({ overflow = false }) => overflow && `overflow: ${overflow};`}
    ${({ top = false }) => top && `top: ${top};`}
    ${({ right = false }) => right && `right: ${right};`}
    ${({ minWidth = false }) => minWidth && `min-width: ${minWidth};`}
    ${({ border = false }) => border && `border: ${border};`}
    ${({ borderRadius = false }) => borderRadius && `border-radius: ${borderRadius};`}
    ${({ cursor = false }) => cursor && `cursor: ${cursor};`}
    ${({ textDecoration = false }) => textDecoration && `text-decoration: ${textDecoration};`}
    
    &:hover {
        ${({ hoverColor = false}) => hoverColor && `color: ${hoverColor};`}
        ${({ hoverWidth = false}) => hoverWidth && `width: ${hoverWidth};`}
        ${({ hoverHeight = false}) => hoverHeight && `height: ${hoverHeight};`}
        ${({ hoverMargin = false}) => hoverMargin && `margin: ${hoverMargin};`}
        ${({ hoverPadding = false}) => hoverPadding && `padding: ${hoverPadding};`}
        ${({ hoverBorder = false}) => hoverBorder && `border: ${hoverBorder};`}
        ${({ hoverBoxShadow = false}) => hoverBoxShadow && `box-shadow: ${hoverBoxShadow};`}
        ${({ hoverTransition= false}) => hoverTransition && `transition: ${hoverTransition};`}
    }
    
    ::-webkit-scrollbar {
      ${({ scrollBarWidth = false }) => scrollBarWidth && `width: ${scrollBarWidth};`}
      ${({ scrollBackgroundColor = false }) => scrollBackgroundColor && `background-color: ${scrollBackgroundColor};`}
      ${({ scrollBarBorderRadius = false }) => scrollBarBorderRadius && `border-radius: ${scrollBarBorderRadius};`}
    }

    ::-webkit-scrollbar-thumb {
      ${({ scrollBarThumbBackgroundColor = false }) => scrollBarThumbBackgroundColor && `background-color: ${scrollBarThumbBackgroundColor};`}
      ${({ scrollBarThumbBorderRadius = false }) => scrollBarThumbBorderRadius && `border-radius: ${scrollBarThumbBorderRadius};`}
    }
    
    ${({ scrollBarFaceColor = false }) => scrollBarFaceColor && `::-webkit-scrollbar-face-color: ${scrollBarFaceColor};`}
    ${({ scrollBarArrowColor = false }) => scrollBarArrowColor && `::-webkit-scrollbar-arrow-color: ${scrollBarArrowColor};`}
    ${({ scrollBarTrackColor = false }) => scrollBarTrackColor && `::-webkit-scrollbar-track-color: ${scrollBarTrackColor};`}
    
    @media ${TABLET_HORIZONTAL_SCREEN} {
        ${({ tabletHorizontalMargin = false }) => tabletHorizontalMargin && `margin: ${tabletHorizontalMargin};`}
        ${({ tabletHorizontalBackgroundImage = false }) => tabletHorizontalBackgroundImage && `background-image: ${tabletHorizontalBackgroundImage};`}
        ${({ tabletHorizontalBackgroundPosition = false }) => tabletHorizontalBackgroundPosition && `background-position: ${tabletHorizontalBackgroundPosition};`}
        ${({ tabletHorizontalPadding = false }) => tabletHorizontalPadding && `padding: ${tabletHorizontalPadding};`}
        ${({ tabletHorizontalWidth = false }) => tabletHorizontalWidth && `width: ${tabletHorizontalWidth};`}
        ${({ tabletHorizontalMinWidth = false }) => tabletHorizontalMinWidth && `min-width: ${tabletHorizontalMinWidth}`};
    }
    
    @media ${MOBILE_SCREEN} {
        ${({ mobileMargin = false }) => mobileMargin && `margin: ${mobileMargin};`}
        ${({ mobileBackgroundImage = false }) => mobileBackgroundImage && `background-image: ${mobileBackgroundImage};`}
        ${({ mobileBackgroundPosition = false }) => mobileBackgroundPosition && `background-position: ${mobileBackgroundPosition};`}
        ${({ mobilePadding = false }) => mobilePadding && `padding: ${mobilePadding};`}
        ${({ mobileWidth = false }) => mobileWidth && `width: ${mobileWidth};`}
        ${({ mobileMinWidth = false }) => mobileMinWidth && `min-width: ${mobileMinWidth};`}
    }
`;

export default Block;