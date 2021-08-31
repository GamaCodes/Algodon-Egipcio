import React from "react";
import QueueAnim from "rc-queue-anim";
import "rc-texty/assets/index.css";

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;

    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={["bottom", "top"]}
          delay={200}
          {...dataSource.textWrapper}
        >
          <section className="banner-logo">
            <img
              src="algodon_logotipo.svg"
              className="algo-img"
              alt="algodon"
            />
            <img
              src="algodon_font.svg"
              alt="tipografia"
              className="algo-typo"
            />
          </section>
        </QueueAnim>
      </div>
    );
  }
}
export default Banner;
