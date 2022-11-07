import React from "react";
import IMG from "../imagenes/Arepa-Con-Chorizo.jpg"

export function Menu() {
    return (
        <>
            <hi className="tittle">AREPAS</hi>
            <div className="arepas">
                <div className="arepa">
                    <a href="#">
                        <div className="arepa_img">
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="arepas_footer">
                        <h1>tittle</h1>
                        <p> Categoria </p>
                        <p className="price">$8.000</p>
                    </div>
                    <div className="Bottom">
                        <button className="btn">
                            Añadir al carro
                        </button>
                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="arepa">
                    <a href="#">
                        <div className="arepa_img">
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="arepas_footer">
                        <h1>tittle</h1>
                        <p> Categoria </p>
                        <p className="price">$8.000</p>
                    </div>
                    <div className="Bottom">
                        <button className="btn">
                            Añadir al carro
                        </button>
                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="arepa">
                    <a href="#">
                        <div className="arepa_img">
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="arepas_footer">
                        <h1>tittle</h1>
                        <p> Categoria </p>
                        <p className="price">$8.000</p>
                    </div>
                    <div className="Bottom">
                        <button className="btn">
                            Añadir al carro
                        </button>
                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}