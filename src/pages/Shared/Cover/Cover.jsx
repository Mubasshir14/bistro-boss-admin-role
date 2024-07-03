
import { Parallax} from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}  
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero md:h-[700px] h-[300px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-slate-500 bg-opacity-60">
                    <div className="max-w-screen-lg md:py-28 md:px-72">
                        <h1 className="mb-5 md:text-5xl font-bold uppercase font-cinzel">{title}</h1>
                        <p className="mb-5 uppercase">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
