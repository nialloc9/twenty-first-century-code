import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import Block from '../../components/Common/Styled/Block';
import Header from '../../components/Common/Styled/Header';
import { remCalc } from '../../common/helpers';

class Education extends Component {

    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex })
    };

    render() {

        const { activeIndex } = this.state;

        return (
            <Block>
                <Header as="h2">Education</Header>

                <Accordion styled>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        HDip in science in computing (level 8)
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <Block>
                            This course includes a specialisation in software development offering detailed knowledge,
                            problem-solving and technical skills in the area of software development using Java programming language and the Ruby on Rails framework.
                        </Block>
                        <Block margin={`${remCalc(20)} 0 0 0`}>
                            2017
                        </Block>
                        <Block margin={`${remCalc(20)} 0 0 0`}>
                            Find more information <a href="https://www.ncirl.ie/Courses/Course-Details/course/HDCOMP" target="__blank">here</a>.
                        </Block>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        HDip in Business Management (level 8)
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <Block>
                            Provides business skills needed for management. Modules taught on the programme are contemporary Marketing and Branding, Strategic Management, HRM - OB, Financial Decision Making, Economics for Business, and New Venture Creation.
                        </Block>
                        <Block margin={`${remCalc(20)} 0 0 0`}>
                            2013
                        </Block>
                        <Block margin={`${remCalc(20)} 0 0 0`}>
                            Find more information <a href="http://www.lit.ie/Courses/HDipBusinessManagement/default.aspx" target="__blank">here</a>.
                        </Block>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        BEng in Road Transport Technology and Management (level 7)
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <Block>
                            This programme is a mix of technological, business and management skills specifically related to the automotive/ transport industry. Students will be exposed to concepts and ideas that will allow them to develop the necessary competencies for a career in the transport industry.
                        </Block>
                        <Block margin={`${remCalc(20)} 0 0 0`}>
                            2012
                        </Block>
                        <Block margin={`${remCalc(20)} 0 0 0`}>
                            Find more information <a href="http://lit.ie/Courses/LC286/default.aspx" target="__blank">here</a>.
                        </Block>
                    </Accordion.Content>
                </Accordion>
            </Block>
        )
    }
}

export default Education;