import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Review.css";
import { Avatar } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }}/>
    </div>
  );
};
const Review = () => {
  return (
    <div className="review" id="reviewLink">
      <div style={{ width: "60%", textAlign: "center" }}>
        <h1>Reviews</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          description="I was diagnosed with Polycystic Kidney Disease and was afraid of the long and complicated process of finding the right treatment. The CT scan tool made it so easy for me to get a clear diagnosis and move forward with my treatment plan. I am so grateful for this tool and highly recommend it to anyone with nephrological concerns."
          name="~ Jacob Brown ~"/>
          <Card img="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg" 
          description="I was skeptical about using an online CT scan tool at first, but I am so glad I did. The results were just as accurate as if I had gone to the doctor, and I was able to receive my report within a matter of minutes. I highly recommend this tool to anyone looking for a convenient and reliable way to diagnose nephrological diseases."
          name="~ Ethan Tremblay ~"/>
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, description, name }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
      {description}
      </p>
      <h4 style={{ fontStyle: "italic"}}>
        <span style={{ fontWeight: 600, color: "green" }}>{name}</span>
      </h4>
    </div>
  );
};

export default Review;