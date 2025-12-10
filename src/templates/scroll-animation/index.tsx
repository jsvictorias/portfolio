import Lottie from 'lottie-react';
import scrollanimation from '../../animation/flower.json';
import './styles.css';

export const ScrollAnimation = () => {
    return (
        <section className="scroll-animation">
            <Lottie 
                animationData={scrollanimation}
                loop
                autoplay
                className="lottie-responsive"
            />
        </section>
    );
};
