import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet"
import { capitalizeEachWord } from "../common/utils"

const withHelmet = WrappedComponent =>
    class MyComponent extends Component {
        static propTypes = {
            head: PropTypes.shape({
                title: PropTypes.string,
                meta: PropTypes.arrayOf(PropTypes.shape({
                    name: PropTypes.string,
                    content: PropTypes.string
                }))
            })
        };

        static defaultProps = {
            head: {
                title: "",
                meta: []
            }
        }

        static metaManipulatorMap = {
            description: content => capitalizeEachWord(content)
        }

        get title() {
            return capitalizeEachWord(this.props.head.title)
        }

        get meta() {
            return this.props.head.meta
        }

        get componentProps() {
            const { head, ...rest } = this.props

            return rest
        }

        renderTitle = () => this.title && <title>{this.title}</title>

        renderMeta = () => this.meta.map(({ name, content, ...rest }) => {

            const newContent = MyComponent.metaManipulatorMap[name] ? MyComponent.metaManipulatorMap[name](content) : content;
                
            return <meta key={`${name}-${newContent}`} name={name} content={newContent} {...rest} />
        })
        
        renderHelmet = () => <Helmet>{this.renderTitle()} {this.renderMeta()}</Helmet>

        render() {

            return (
                <Fragment>
                    {this.renderHelmet()}
                    <WrappedComponent  {...this.componentProps} />
                </Fragment>
            );
        }
    };

export default withHelmet;
