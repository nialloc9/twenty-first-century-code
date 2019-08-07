import React, { Component, Fragment } from 'react'
import Block from '../../Common/Styled/Block';
import CodeBlock from '../../Common/Styled/CodeBlock';
import ImagePopup from '../../Common/ImagePopup';
import Link from '../../Common/Styled/Link';
import List from "../List";
import Video from "../Video";
import { remCalc, generateId } from '../../../common/helpers';
import withLoader from '../../../hoc/withLoader';
import config from "../../../config/globals";

const { LINKEDIN } = config

class Article extends Component{

    shouldComponentUpdate(prevProps){
        const { onShoudComponentUpdate } = this.props

        if(onShoudComponentUpdate) return onShoudComponentUpdate(prevProps, this.props)

        return false
    }

    renderImage = ({ src, alt, size = "medium", margin="auto" }) => (
        <ImagePopup
            src={src}
            margin={margin}
            size={size}
            alt={alt}
            key={src}
        />
    )

    renderSource = ({ href, text = "GitHub" }) => (
        <Block margin={`${remCalc(20)} 0`} key={href}>
            Source code: <Link target="_blank" rel="noopener noreferrer" href={href}>{text}</Link>
        </Block>
    )

    renderParagraph = ({ margin = `${remCalc(20)} 0`, text }) => <Block key={`paragraph-${text}`} margin={margin}>{text}</Block>
    
    renderPublished = ({  margin = `${remCalc(20)} 0`, href=LINKEDIN, author = "Niall O' Connor", date }) => <Block margin={margin} key={`published-${author}`}>Published by <Link href={href} target="__blank" rel="noopener noreferrer">{author}</Link> on {date}.</Block>
    
    renderCode = ({ margin = `${remCalc(20)} 0`, code, language = "javascript" }) => <CodeBlock language={language} margin={margin} key={generateId()}>{code}</CodeBlock>
    
    renderMarkup = ({ markup }) => markup

    renderList = ({ data }) => <List data={data} />

    renderVideo = ({ url, isHd, placeholder }) => <Video url={url} isHd={isHd} placeholder={placeholder} />

    renderNpm = ({ isLoading, href, text = "NPM", downloads }) => {

        const LoadingBlock = withLoader(Block);

        return (
            <Fragment key={text}>
                <Block margin={`${remCalc(20)} 0`}>
                    NPM package:{" "}
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={href}
                    >
                        {text}
                    </Link>
                </Block>
    
                <LoadingBlock loading={isLoading} margin={`${remCalc(20)} 0`}>
                    Downloads: {downloads}
                </LoadingBlock>          
            </Fragment>
        )
    }

    renderData = () => {
        const { data } = this.props

        const map = {
            "image": this.renderImage,
            "source": this.renderSource,
            "paragraph": this.renderParagraph,
            "code": this.renderCode,
            "published": this.renderPublished,
            "markup": this.renderMarkup,
            "npm": this.renderNpm,
            "list": this.renderList,
            "video": this.renderVideo,
        }

        return data.map(o => map[o.type](o))
    }

    render(){
        return(
            <Block
                maxWidth={remCalc(800)}
                tabletHorizontalMaxWidth={remCalc(600)}
                mobileMaxWidth={remCalc(300)}
            >
                {this.renderData()}
            </Block>
        )
    }
}

export default Article;