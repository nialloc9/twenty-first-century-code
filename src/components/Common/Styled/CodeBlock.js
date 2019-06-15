import React, { Component } from 'react';
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import php from 'react-syntax-highlighter/dist/esm/languages/hljs/php';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import Block from './Block';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('python', python);

class CodeBlock extends Component{

    static defaultProps = {
        language: "javascript"
    }
 
    render(){

        return <Block
            textAlign="left"
            width="100%"
        >
            <SyntaxHighlighter style={docco} {...this.props} />
        </Block>
    }

}

export default CodeBlock;