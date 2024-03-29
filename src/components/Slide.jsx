
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography, styled } from '@mui/material';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const StyledBanner = styled('img')`
    width: 100%;
    margin-top: 20px;
`

const Title = styled(Typography)`
    color: #FFFFFF;
    display: flex;
`;

const Slide = ({ movies }) => {

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="react-multi-carousel-list"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            style={{ overflow: 'visible' }}
        >
            {
                movies.map(movie => (
                    <>
                        <StyledBanner src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="banner" />
                        <Title>{movie.original_title}</Title>
                    </>
                ))
            }
        </Carousel>
    )
}

export default Slide;