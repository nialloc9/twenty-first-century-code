import Styled from "styled-components";
import { remCalc } from "../../../common/utils";
import { MOBILE_SCREEN, TABLET_HORIZONTAL_SCREEN, LARGE_SCREEN } from '../../../common/settings';

const Block = Styled("div")`
    margin: ${({ margin = 0 }) => margin};
    padding: ${({ padding = 0 }) => padding};

    font-size: ${({ theme: { fontSize } }) => remCalc(fontSize)};
    line-height: ${({ theme: { lineHeight } }) => lineHeight};
    color: ${({ theme: { fontColor } }) => fontColor};
    
    ${({ height = false }) => height && `height: ${height};`}
    ${({ lineHeight = false }) => lineHeight && `line-height: ${lineHeight};`}
    ${({ textAlign = false }) => textAlign && `text-align: ${textAlign};`}
    ${({ verticalAlign = false }) => verticalAlign && `vertical-align: ${verticalAlign};`}
    ${({ display = false }) => display && `display: ${display};`}
    ${({ background = false }) => background && `background: ${background};`}
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
    ${({ whiteSpace = false }) => whiteSpace && `white-space: ${whiteSpace};`}
    ${({ clipPath = false }) => clipPath && `clip-path: ${clipPath};`}
   
    
    &:hover {
        ${({ hoverColor = false}) => hoverColor && `color: ${hoverColor};`}
        ${({ hoverClipPath = false}) => hoverClipPath && `clip-path: ${hoverClipPath};`}
        ${({ hoverWidth = false}) => hoverWidth && `width: ${hoverWidth};`}
        ${({ hoverHeight = false}) => hoverHeight && `height: ${hoverHeight};`}
        ${({ hoverMargin = false}) => hoverMargin && `margin: ${hoverMargin};`}
        ${({ hoverPadding = false}) => hoverPadding && `padding: ${hoverPadding};`}
        ${({ hoverBorder = false}) => hoverBorder && `border: ${hoverBorder};`}
        ${({ hoverBoxShadow = false}) => hoverBoxShadow && `box-shadow: ${hoverBoxShadow};`}
        ${({ hoverTransition = false}) => hoverTransition && `transition: ${hoverTransition};`}
        ${({ hoverTransition = false}) => hoverTransition && `-webkit-transition: ${hoverTransition};`}
        ${({ hoverTransform = false }) => hoverTransform && `-ms-transform: ${hoverTransform};`}
        ${({ hoverTransform = false }) => hoverTransform && `-webkit-transform: ${hoverTransform};`}
        ${({ hoverTransform = false }) => hoverTransform && `transform: ${hoverTransform};`}
        ${({ hoverOpacity = false }) => hoverOpacity && `opacity: ${hoverOpacity};`}
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
        ${({ tabletHorizontalMinWidth = false }) => tabletHorizontalMinWidth && `min-width: ${tabletHorizontalMinWidth};`}
        ${({ tabletHorizontalMaxWidth = false }) => tabletHorizontalMaxWidth && `max-width: ${tabletHorizontalMaxWidth};`}

        ${({ tabletClipPath = false}) => tabletClipPath && `clip-path: ${tabletClipPath};`}
        
        &:hover {
          ${({ tabletHoverClipPath = false}) => tabletHoverClipPath && `clip-path: ${tabletHoverClipPath};`}
        }
    }
    
    @media ${MOBILE_SCREEN} {
        ${({ mobileMargin = false }) => mobileMargin && `margin: ${mobileMargin};`}
        ${({ mobileBackgroundImage = false }) => mobileBackgroundImage && `background-image: ${mobileBackgroundImage};`}
        ${({ mobileBackgroundPosition = false }) => mobileBackgroundPosition && `background-position: ${mobileBackgroundPosition};`}
        ${({ mobilePadding = false }) => mobilePadding && `padding: ${mobilePadding};`}
        ${({ mobileWidth = false }) => mobileWidth && `width: ${mobileWidth};`}
        ${({ mobileMinWidth = false }) => mobileMinWidth && `min-width: ${mobileMinWidth};`}
        ${({ mobileMaxWidth = false }) => mobileMaxWidth && `max-width: ${mobileMaxWidth};`}
    }
`;

export default Block;