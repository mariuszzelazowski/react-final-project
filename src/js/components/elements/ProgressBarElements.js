import React from 'react';

import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from '@chakra-ui/react';


const ProgressBarElements = () => {
    return (
        <Slider aria-label='slider-ex-2' colorScheme='red'>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    );
};

export default ProgressBarElements;