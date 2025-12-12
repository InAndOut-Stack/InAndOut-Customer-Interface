import {Stack, } from '@mui/material';

interface CarouselContainerProps {
  image: string;
  zindex?: number;
}

function CarouselContainer({ image, zindex }: CarouselContainerProps) {
  return(
    <Stack sx={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      maxWidth: '200px',
      maxHeight: '200px',
      borderRadius: '70px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: zindex,
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      filter: `drop-shadow(0.3px 0px 0px rgba(0, 0, 0, 0.5))
              drop-shadow(0px 0.5px 1.5px rgba(0, 0, 0, 0.5))`
    }}
    />
  )
};

export default CarouselContainer;