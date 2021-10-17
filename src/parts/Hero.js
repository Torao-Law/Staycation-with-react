import React from 'react'
import Button from 'elements/Button'

import ImgHero from 'assets/images/picture.png'
import ImgHeroFrame from 'assets/images/frame.png'
import IconCity from 'assets/images/icons/ic_cities.svg'
import IconTravel from "assets/images/icons/ic-traveler.svg"
import IconTreasure from 'assets/images/icons/ic_treasure.svg'

import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth",

        })
    }

    return (
        <section className="container" style={{ marginTop: 80}}>
            <div className="row align-item-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">Forget Busy Work,<br />Start Next Vacation</h1>

                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%"}}>We provide what you need to enjoy your
                       holiday with family. Time to make another
                       memorable moments.
                    </p>

                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked} style={{ marginBottom: 30, marginTop: 5 }}>
                        Show Me Now
                    </Button>

                    <div className="row mt-5">
                        <div className="col mx-auto" style={{marginRight: 35}}>
                            <img widht="36" height="36" src={IconTravel} alt={`${props.data.travelers} Travelers`} />
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)}{" "}
                                <span className="text-gray-500 font-weight-light"> travels</span>
                            </h6>
                        </div>

                        <div className="col mx-auto" style={{marginRight: 35}}>
                            <img widht="36" height="36" src={IconCity} alt={`${props.data.travelers} Travelers`} />
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)}{" "}
                                <span className="text-gray-500 font-weight-light"> cities</span>
                            </h6>
                        </div>

                        <div className="col mx-auto">
                            <img widht="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures)}{" "}
                                <span className="text-gray-500 font-weight-light"> treasure</span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5 ">
                    <div style={{ width: 420, height:410 }}>
                        <img src={ImgHero} className="img-fluid position-absolute" alt="Room with couches" style={{ margin: "-30px 0 0 -30px", zIndex: 1 }} />
                        <img src={ImgHeroFrame} className="img-fluid position-absolute" alt="Room with couches frame" style={{ margin: "0 15px 15px 0" }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
