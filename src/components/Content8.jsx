import React from "react";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col } from "antd";
import QueueAnim from "rc-queue-anim";
import { getChildrenToRender } from "./utils";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;
class Content8 extends React.PureComponent {
  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { OverPack: overPackData, childWrapper } = dataSource;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <Title className="feature-8-title">
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </Title>
          <section className="content-section">
            <Paragraph>
              Somos una empresa mexicana dedicada a la Comercialización de
              productos textiles desde hace más de 9 años en el mercado. Somos
              un grupo textil que buscamos que cada una de nuestras telas sea el
              reflejo del trabajo de una cadena de valor responsable, desde el
              acopio de las materias primas pasando por la producción y
              distribución de los productos hasta su venta y consumidor final.
            </Paragraph>
            <Paragraph>
              En nuestro portafolio tenemos telas para todos los universos
              textiles: femenino, masculino, infantil, pijamería, sport, playa,
              ropa íntima & control, industria y dotaciones. Para responder a
              las necesidades de nuestros clientes.
            </Paragraph>

            <Paragraph>
              La Innovación ha sido siempre nuestro punto de partida, viendo en
              cada reto una oportunidad para seguir comprometiéndonos con el
              crecimiento de la industria en nuestro país. Lideramos la
              investigación en moda y tendencias, analizamos las tendencias de
              la moda del mundo para así adaptarlas a las necesidades de cada
              país en los que tenemos presencia comercial.
            </Paragraph>
          </section>

          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={dataSource.childWrapper}
            >
              {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    <div {...item} className="feature-8">
                      {item.children.map(getChildrenToRender)}
                    </div>
                  </Col>
                );
              })}

              <section className="value-content8">
                <Title className="content0-variant-ti">valores</Title>

                <Paragraph className="value-content8-p">
                  <ul>
                    <li>
                      <Text strong>Pasión:</Text> Estar comprometidos con el
                      corazón y con la mente.
                    </li>
                    <li>
                      <Text strong> Honestidad:</Text> En todo lo que te
                      ofrecemos.
                    </li>
                    <li>
                      <Text strong> Colaboración:</Text> Trabajar en armonía.
                    </li>
                    <li>
                      <Text strong> Cumplimiento:</Text> Tiempos de entrega.
                    </li>
                    <li>
                      <Text strong> Integridad: </Text>Ser transparentes.
                    </li>
                    <li>
                      <Text strong> Rendir cuentas: </Text>Ser responsables.
                    </li>
                    <li>
                      <Text strong> Entera satisfacción al cliente</Text>
                    </li>
                    <li>
                      <Text strong> Calidad: </Text>Búsqueda de la excelencia.
                    </li>
                    <li>
                      <Text strong> Dedicación.</Text>
                    </li>
                  </ul>
                </Paragraph>
              </section>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content8;
