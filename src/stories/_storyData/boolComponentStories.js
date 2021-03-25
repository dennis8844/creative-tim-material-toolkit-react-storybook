import React from 'react';
import {
    Checkbox,
    Radio,
    Switch
    //FormControlLabel
} from "@material-ui/core";

export const defaultArgTypes = {
    checked: {
        control: "boolean"
    },
    disabled: {
        control: "boolean"
    }
};

export const checkboxArgs = {
    title: 'Components/CheckboxRadioSwitch/Checkbox',
    component: Checkbox,
    argTypes: {
        ...defaultArgTypes
    }
};

export const CheckboxTemplate = (args) => {
    return (
        <Checkbox {...args} />
    );
}

export const CheckboxProps = CheckboxTemplate.bind({});
CheckboxProps.args = {

};

export const radioArgs = {
    title: 'Components/CheckboxRadioSwitch/Radio',
    component: Radio,
    argTypes: {
        ...defaultArgTypes
    }
};

export const RadioTemplate = (args) => {
    return (
        <Radio {...args} />
    );
}

export const RadioProps = RadioTemplate.bind({});
RadioProps.args = {

};

export const switchArgs = {
    title: 'Components/CheckboxRadioSwitch/Switch',
    component: Switch,
    argTypes: {
        ...defaultArgTypes
    }
};

export const SwitchTemplate = (args) => {
    return (
        <Switch {...args} />
    );
}

export const SwitchProps = RadioTemplate.bind({});
SwitchProps.args = {

};
