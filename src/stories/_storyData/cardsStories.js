import React from 'react';

import Card from '../../_material-toolkit-components/Card/Card';
import CardHeader  from '../../_material-toolkit-components/Card/CardHeader';
import CardBody  from "../../_material-toolkit-components/Card/CardBody";
import CardFooter from "../../_material-toolkit-components/Card/CardFooter";

// const cardStyle = {};
// const cardHeaderProps = {};
// const cardFooterProps = {};
// const defaultChildren = <>
//     <CardHeader></CardHeader>
//     <CardBody></CardBody>
//     <CardFooter></CardFooter>
// </>;

export const cardArgs = {
  title: 'Components/Cards/Card',
  component: Card,
  argTypes: {
      backgroundColor: {control: 'color'},
      plain: {
          control: "boolean"
      },
      carousel: {
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

export const cardHeaderArgs = {
    title: 'Components/Cards/CardHeader',
    component: CardHeader,
    argTypes: {
        backgroundColor: {control: 'color'},
        color: {
            control: 'select',
            options: ["warning", "success", "danger", "info", "primary"]
        },
        plain: {
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

export const cardBodyArgs = {
    title: 'Components/Cards/CardBody',
    component: CardBody,
    argTypes: {
        backgroundColor: {control: 'color'},
        className: {
            control: "text"
        },
        style: {
            control: "object"
        }
    }
};

export const cardFooterArgs = {
    title: 'Components/Cards/CardFooter',
    component: CardFooter,
    argTypes: {
        backgroundColor: {control: 'color'},
        className: {
            control: "text"
        },
        style: {
            control: "object"
        }
    }
};

export const CardTemplate = (args) => {
    return (
        <Card {...args} />
    );
}

export const CardHeaderTemplate = (args) => {
    return (
        <CardHeader {...args} />
    );
};

export const CardBodyTemplate = (args) => {
    return (
        <CardBody {...args}/>
    );
}

export const CardFooterTemplate = (args) => {
    return (
        <CardFooter {...arg} />
    );
}

export const AllCardPropsTemplate = (cardArgs, cardHeaderArgs, cardBodyArgs, cardFooterArgs) => {
    return (
        <Card {...cardArgs}>
            <CardHeader {...cardHeaderArgs} />
            <CardBody {...cardBodyArgs} />
            <CardFooter {...cardFooterArgs} />
        </Card>
    );
}

export const CardProps = CardTemplate.bind({});
CardProps.args = {
    className: "",
    plain: false,
    carousel: false,
    backgroundColor: ""
};

export const CardHeaderProps = CardHeaderTemplate.bind({});
CardHeaderProps.args = {
    className: "",
    plain: false,
    carousel: false,
    backgroundColor: "",
    color: ""
};

export const CardBodyProps = CardBodyTemplate.bind({});
CardBodyProps.args = {
    className: "",
    backgroundColor: ""
};

export const CardFooterProps = CardFooterTemplate.bind({});
CardFooterProps.args = {
    className: "",
    backgroundColor: ""
};

export const AllCardComponentsProps = AllCardPropsTemplate.bind({});
AllCardPropsTemplate.cardArgs = {
    ...CardProps.args
};
AllCardPropsTemplate.cardHeaderArgs = {
    ...CardHeaderProps.args
};
AllCardPropsTemplate.cardBodyArgs = {
    ...CardBodyProps.args
};
AllCardPropsTemplate.cardFooterArgs = {
    ...CardFooterProps.args
};

// export const Plain = Template.bind({});
// Plain.args = {
//   plain: true,
//   children: defaultChildren
// };
//
// export const Carousel = Template.bind({});
// Carousel.args = {
//   carousel: true,
//   children: defaultChildren
// };
