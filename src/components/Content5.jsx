import React from "react";
import { Row, Col } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";

import { Typography } from "antd";

const { Title, Paragraph } = Typography;

class Content5 extends React.PureComponent {
  getChildrenToRender = (data) =>
    data.map((item) => {
      return (
        <Col key={item.name} {...item}>
          <a {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.img.children} height="100%" alt="img" />
            </span>
            <p {...item.children.content}>{item.children.content.children}</p>
          </a>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      dataSource.block.children
    );
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <Title className="feature-8-title">
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </Title>

          <OverPack
            className={`content-template ${props.className} content-test`}
            {...dataSource.OverPack}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{
                y: "+=30",
                opacity: 0,
                type: "from",
                ease: "easeInOutQuad",
              }}
              leave={{ y: "+=30", opacity: 0, ease: "easeInOutQuad" }}
              {...dataSource.block}
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>

          <section className="value-content8">
            <Paragraph>
              Opciones de Telas y Forros de acuerdo a su requerimiento y
              Necesidades
            </Paragraph>
            <img
              src="https://images.pexels.com/photos/4614119/pexels-photo-4614119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="rollo de tela"
              className="img-w-p"
            />
            <Title className="content0-variant-ti">tipos de telas</Title>

            <Paragraph className="value-content8-p">
              <ul>
                <li>TIMBERLAN CON IMPERTEX</li>
                <li>MICROFIBRA</li>
                <li>MICROFIBRA FUSIONADA</li>
                <li>FELPA</li>
                <li>PIQUÉ</li>
                <li>DRY FIT</li>
                <li>GAMUZA</li>
                <li>GABARDINA</li>
                <li>MARATÓN</li>
              </ul>
            </Paragraph>
            <Title className="content0-variant-ti">tipos de forros</Title>

            <Paragraph className="value-content8-p">
              <ul>
                <li>POLAR TERMICO</li>
                <li>BIPOLAR TERMICO</li>
                <li>TAFETA LIZA</li>
                <li>RAYADA O CUADROS</li>
                <li>TAFETA</li>
                <li>CANILLA</li>
                <li>MILLENIUM</li>
                <li>CAPITONADOS</li>
                <li>JACKAR</li>
              </ul>
            </Paragraph>
          </section>
        </div>
      </div>
    );
  }
}

export default Content5;
