import React from 'react';

import { Button } from '../_material-toolkit-components/';
import {BUTTON_COLORS, BUTTON_SIZES} from "../_material-toolkit-components/utils/enums";
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: {
        control: {
            type: 'select',
            options: Object.values(BUTTON_COLORS)
        }
    },
    size: {
        control: {
            type: 'inline-radio',
            options: Object.values(BUTTON_SIZES)
        }
    },
    simple: {
        control: "boolean"
    },
    round: {
        control: "boolean"
    },
    fullWidth: {
        control: "boolean"
    },
    disabled: {
        control: "boolean"
    },
    block: {
        control: "boolean"
    },
    link: {
        control: "boolean"
    },
    justIcon: {
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
    let label = "";
    if (!!args.label) {
        label = args.label;
        delete args.label;
    }

    if (!!args.justIcon) {
        return (
            <Button {...args}>
                <DeleteForeverSharpIcon/>
            </Button>
        );
    }
    return (
        <Button {...args}>Button</Button>
    )
}

export const Primary = Template.bind({});
Primary.args = {
  color: BUTTON_COLORS.primary,
  label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  color: BUTTON_COLORS.success
};

export const Large = Template.bind({});
Large.args = {
  size: BUTTON_SIZES.large,
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: BUTTON_SIZES.small,
  label: 'Button',
};

export const Simple = Template.bind({});
Simple.args = {
    simple: true,
    label: 'Button',
};

export const Round = Template.bind({});
Round.args = {
    round: true,
    label: 'Button',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    fullWidth: true,
    label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    label: 'Button',
};

export const Block = Template.bind({});
Block.args = {
    block: true,
    label: 'Button',
};

export const Link = Template.bind({});
Link.args = {
    link: true,
    label: 'Button',
};

export const JustIcon = Template.bind({});
JustIcon.args = {
    justIcon: true
};
