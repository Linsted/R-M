import ImgM312px from "../../img/Header_img_mobile.jpg"
import ImgM624px_2x from "../../img/Header_img_mobile@2x.jpg"
import ImgD600px from "../../img/Header_img_desktop.jpg"
import ImgD1200px_2x from "../../img/Header_img_desktop@2x.jpg"


export const Header = () => { 

    return (
        
        <header>
            <picture>
                <source srcSet={`${ImgD600px} 600w, ${ImgD1200px_2x} 1200w`} media="(min-width: 361px)" sizes="(min-width: 600px) 600px" type="image/jpeg" />
                <source srcSet={`${ImgM312px} 312w, ${ImgM624px_2x} 624w`} media="(max-width: 360px)" sizes="(min-width: 360px) 100vw" type="image/jpeg" />
                <img src={ImgD600px} alt="Rick and Morty poster" />
            </picture>
    </header>);
    
};