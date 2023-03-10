import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { featuredData } from "@/data";
import Image from "next/image";
import BlueButtonOutline from "@/components/ui/BlueButtonOutline";
import { resFont } from "@/styles/GlobalStyle";

const FeaturedCollection = () => {
  return (
    <Featuredcard className="custom-container">
      <h2 className="int-cf">Collection Featured NFTs</h2>
      <Row>
        {featuredData.map((element, index) => {
          return (
            <Col lg="4" md="6" key={index + "-featured"}>
              <div className="feature-box">
                <div className="img-area">
                  <div className="img-main">
                    <Image src={element.image} alt="featured img" />
                  </div>
                  <div className="img-col">
                    {element.sm_img.map((e, idx) => {
                      return (
                        <Image src={e} alt="featured img" key={idx + ""} />
                      );
                    })}
                  </div>
                </div>
                <div className="bottom-area">
                  <h2 className="dm-sans">Amazing Collection</h2>
                  <div className="user-area">
                    <div className="user">
                      <Image src={element.user_img} alt="User Img" />
                      <p className="dm-sans">by {element.user_name}</p>
                    </div>
                    <BlueButtonOutline
                      text={`Total ${element.items} items`}
                      fontFamily="dm-sans"
                      font-size="12"
                    />
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Featuredcard>
  );
};

export default FeaturedCollection;

const Featuredcard = styled.section`
  h2 {
    font-size: ${resFont(24, 32)};
  }
  .img-area {
    display: flex;
    margin-top: 60px;
    .img-main {
      width: 70%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .img-col {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 5%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .bottom-area {
    margin-top: 20px;
    h2 {
      font-size: 20px;
      font-weight: 700;
    }
    .user-area {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .user {
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
        }
      }
    }
  }
`;
