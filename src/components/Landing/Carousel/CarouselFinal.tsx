import { Box } from '@mui/material';
import { motion } from 'framer-motion';

import CarouselContainer from './CarouselContainer';

import images from './images';

//asa sa fie si img!!!!
const size = 200;
const overlap = -80;
const offset = 60;

const generateContent = (count: number) => {
    const imageArray = Object.values(images);
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        url: imageArray[i % imageArray.length],
    }));
};

//passing props to each component
interface ParallaxItemProps {
    image: string;
    index: number;
}

const ParallaxItem = ({ image, index }: ParallaxItemProps) => {
    const xOffset = index % 2 === 1 ? offset : -offset;
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: `${overlap}px`,
            position: 'relative',
        }}>
            <Box sx={{ transform: `translateX(${xOffset}px)` }}>
                <Box sx={{
                    position: 'relative',
                    width: `${size}px`,
                    height: `${size}px`,
                }}>
                    <CarouselContainer image={image} zindex={index} />
                </Box>
            </Box>
        </Box>
    );
};

function CarouselElement(){
    const itemCount = 14;
    const items = generateContent(itemCount);
    const dupeItems = [...items, ...items];
    const startHeight = itemCount * (size + overlap);

    return(
        <Box sx={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            zIndex: -50,
            overflow: 'hidden',
            justifyContent: 'center',
            pointerEvents: 'none',
        }}>
            <motion.div
                animate={{ y: [-startHeight, 0]}}
                transition={{
                    duration: 80,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear'
                }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: `-${overlap}px`,
                }}>
                    {dupeItems.map((item, index) => (
                        <ParallaxItem key={index} image={item.url} index={index} />
                    ))}
                </motion.div>
        </Box>
    )
}

export default CarouselElement;