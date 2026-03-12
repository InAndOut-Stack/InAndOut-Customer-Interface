import { useState } from 'react';

function Choice() {
    const [isLandingPage, ] = useState<boolean>(false);
    const [isChoicePage, ] = useState<boolean>(!isLandingPage);
    
    return (
        isChoicePage ? (
            <></>
        ) : null
    );
}

export default Choice;
