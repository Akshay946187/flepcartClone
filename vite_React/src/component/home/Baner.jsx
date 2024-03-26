import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data";
import { styled } from "@mui/material";


const Images = styled('img')({
    width : '100%',
    height : '23rem'
})


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Baner = () => {
    return (
        <Carousel responsive={responsive} dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" containerClass="carousel-container"
        autoPlay = {true}
        infinite = {true}
        autoPlaySpeed={3000}
        swipeable={false}
        draggable={false}
        >
           {
            bannerData.map((data)=>(
                <div key={data.id}>
                    <Images src={data.url} alt="" />
                </div>
            ))
           }
        </Carousel>
    )
}

export default Baner
