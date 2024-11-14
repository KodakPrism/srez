
import { SliderComponent } from "../../components/Slider/Slider";


export function HomePage() {
    return (
        <>
            <div className="banner">
                <h2>Огромный выбор обоев по выгодным ценам</h2>
            </div>

            <div className="gallery">
                <h2>Популярные обои</h2>

                <div className="slider">
                    <SliderComponent />
                </div>
            </div>
        </>
    )
}