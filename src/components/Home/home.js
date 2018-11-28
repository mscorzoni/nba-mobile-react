import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';

const Home = () =>{
    return (
        <div>
            <NewsSlider 
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots: true
                }}
            />
        </div>
    )
}

export default Home;