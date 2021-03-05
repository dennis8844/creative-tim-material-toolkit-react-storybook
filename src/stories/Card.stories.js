import React from 'react';

import {
    Card,
    CardBody,
    CardHeader,
    CardFooter
} from '../_material-toolkit-components/';

const cardStyle = {};
const cardHeaderProps = {};
const cardFooterProps = {};
const defaultChildren = <>
    <CardHeader></CardHeader>
    <CardBody></CardBody>
    <CardFooter></CardFooter>
</>;

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    plain: {
        control: "boolean"
    },
    carousel:{
        control: "boolean"
    },
    className: {
        control: "text"
    },
    style: {
        control: "object"
    }
  }
};


const Template = (args) => {
    return (
        <Card {...args} />
    );
};

export const Plain = Template.bind({});
Plain.args = {
  plain: true,
  children: defaultChildren
};

export const Carousel = Template.bind({});
Carousel.args = {
  carousel: true,
  children: defaultChildren
};
