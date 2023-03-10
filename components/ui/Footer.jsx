import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import fb from "@/public/fb.png";
import twitter from "@/public/twitter.png";
import linkedin from "@/public/linkedin.png";
import Link from "next/link";
import { colors, resFont } from "@/styles/GlobalStyle";

const Footer = () => {
  return (
    <FooterWrapper className="custom-container">
      <Row>
        <Col lg="4">
          <div className="footer-box">
            <Link href="/">
              <h1 className="int-cf">NFTERS</h1>
            </Link>
            <p className="averta">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            <div className="social">
              <a href="#" target="_blank">
                <Image src={fb} alt="FB Icon" />
              </a>
              <a href="#" target="_blank">
                <Image src={twitter} alt="FB Icon" />
              </a>
              <a href="#" target="_blank">
                <Image src={linkedin} alt="FB Icon" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  padding-top: 80px;
  padding-bottom: 80px;
  h1 {
    font-size: ${resFont(24, 28)};
  }
  p {
    margin-top: 30px;
    color: ${colors.textgray};
  }
  .social {
    margin-top: 30px;
    display: flex;
    img {
      margin-right: 16px;
    }
  }
`;
