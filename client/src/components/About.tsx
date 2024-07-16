import { useState } from "react"


const About = () => {
    const [isOpenOne, setIsOpenOne] = useState(false)
    const [isOpenTwo, setIsOpenTwo] = useState(false)
    const [isOpenThree, setIsOpenThree] = useState(false)
    return (
        <>
            <div className="container">
                <div className="about">
                    <div className="about-head">
                        <div className="about-img">
                            <h5>Клийнинг</h5>
                            <p>
                                Клийнинг това е процес на професионално
                                почистване и поддържане на чистота в различни
                                помещения, като жилищни домове, офиси, търговски
                                сгради, хотели, медицински заведения и др.
                            </p>
                            <p>Основните цели на почистването включват:</p>
                        </div>
                        <div>
                            <img src= "/Images/about.png" alt="" />
                        </div>
                    </div>
                    <div className="about-list">
                        <div className="about-list-item">
                            <p className="about-list-item-num">01</p>
                            <h6 className="about-list-item-title">
                                {" "}
                                Хигиена и хигиенизиране
                            </h6>
                            <p className="about-list-item-text">
                                Отстраняването на мръсотията, праха, бактериите
                                и вирусите спомага за поддържането на
                                здравословна среда, за намаляване на риска от
                                заболявания и за подобряване на общото
                                здравословно състояние.
                            </p>
                        </div>

                        <div className="about-list-item">
                            <p className="about-list-item-num">02</p>
                            <h6 className="about-list-item-title"> Естетика</h6>
                            <p className="about-list-item-text">
                                Чистите и добре поддържани пространства
                                изглеждат привлекателно и създават положително
                                впечатление, независимо дали става въпрос за
                                дом, офис или магазин.
                            </p>
                        </div>

                        <div className="about-list-item">
                            <p className="about-list-item-num">03</p>
                            <h6 className="about-list-item-title">
                                {" "}
                                Запазване на собствеността
                            </h6>
                            <p className="about-list-item-text">
                                Редовното почистване и поддръжка на
                                повърхностите, мебелите и оборудването спомагат
                                за удължаване на живота им, като предотвратяват
                                преждевременното им износване и повреждане.
                            </p>
                        </div>

                        <div className="about-list-item">
                            <p className="about-list-item-num">04</p>
                            <h6 className="about-list-item-title">
                                Повишаване на производителността
                            </h6>
                            <p className="about-list-item-text">
                                На чисти и организирани работни места
                                служителите могат да работят по-ефективно, тъй
                                като чистотата подобрява концентрацията и
                                намалява стреса.
                            </p>
                        </div>

                        <div className="about-list-item">
                            <p className="about-list-item-num">05</p>
                            <h6 className="about-list-item-title">
                                Съответствие с разпоредбите и стандартите
                            </h6>
                            <p className="about-list-item-text">
                                В някои области (здравеопазване,
                                хранително-вкусова промишленост) има строги
                                санитарни разпоредби и професионалното
                                почистване помага за спазването им.
                            </p>
                        </div>

                        <div className="about-list-item about-list-item-last">
                            <p className="about-list-item-text">
                                Ние разполагаме  със специализирано оборудване,
                                почистващи препарати и обучен персонал, което им
                                позволява да почистват по-добре и по-ефективно
                                от почистването "направи си сам".
                            </p>
                            <img
                                src= "/Images/aboutlogo.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img
                src= "/Images/divider1.png"
                alt=""
                style={{ width: "100%" }}
                className="divider"
            />
            <div className="container">
                <div className="about-us">
                    <h5 className="about-us-title">Защо ние?</h5>
                    <p className="about-us-text">
                        Когато клиентите ни изберат <br />
                        за своите нужди от почистване, те получават:
                    </p>

                    <div className="about-us-list">
                        <div className="about-list-item about-us-list-item about-us-list-item-1">
                            <p className="about-list-item-num about-us-list-item-num">
                                01
                            </p>
                            <h6 className="about-list-item-title">
                                Професионализъм и опит
                            </h6>
                            <p className="about-list-item-text">
                                Нашият персонал има дългогодишен опит и
                                преминава редовно обучение, за да осигури
                                най-високо ниво на обслужване.
                            </p>
                        </div>

                        <div className="about-list-item about-us-list-item about-us-list-item-2">
                            <p className="about-list-item-num ">02</p>
                            <h6 className="about-list-item-title">
                                Качество и надеждност
                            </h6>
                            <p className="about-list-item-text">
                                Ние използваме само тествани и качествени
                                продукти и оборудване, за да гарантираме чистота
                                и безопасност.
                            </p>
                        </div>

                        <div className="about-list-item about-us-list-item about-us-list-item-2">
                            <p className="about-list-item-num ">03</p>
                            <h6 className="about-list-item-title">
                                Индивидуален подход
                            </h6>
                            <p className="about-list-item-text">
                                Ние съобразяваме услугите си със специфичните
                                нужди и изисквания на всеки клиент.
                            </p>
                        </div>

                        <div className="about-list-item about-us-list-item about-us-list-item-1">
                            <p className="about-list-item-num about-us-list-item-num">
                                04
                            </p>
                            <h6 className="about-list-item-title">
                                Гъвкавост и удобство
                            </h6>
                            <p className="about-list-item-text">
                                Предлагаме разнообразни пакети и графици, за да
                                отговорим най-добре на нуждите на нашите
                                клиенти.
                            </p>
                        </div>

                        <div className="about-list-item about-us-list-item about-us-list-item-1">
                            <p className="about-list-item-num about-us-list-item-num">
                                05
                            </p>
                            <h6 className="about-list-item-title">
                                щадящи околната среда
                            </h6>
                            <p className="about-list-item-text">
                                Грижим се за природата и използваме щадящи
                                околната среда почистващи продукти.
                            </p>
                        </div>

                        <div className="about-list-item about-us-list-item about-us-list-item-2 about-us-list-item-last">
                            <p>
                                Клиентите ни могат да бъдат сигурни в чистотата
                                и подредеността, поверявайки имуществото си в
                                нашите ръце.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src= "/Images/divider2.png"
                alt=""
                style={{ width: "100%" }}
                className="divider"
            />
            <div className="container">
                <div className="about-bloger">
                    <div className="about-bloger-head">
                        <h5 className="about-bloger-title">
                            На нас се доверяват
                        </h5>
                        <p className="about-bloger-text">
                            Работим с известни блогъри и компании като:
                        </p>
                    </div>

                    <div className="about-bloger-list">
                        <button className="about-bloger-list-item">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <img
                                            src={
                                              "/Images/nugabest.png"
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-back">
                                        <img
                                            src={
                                              
                                                "/Images/nugabest1.png"
                                            }
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button className="about-bloger-list-item">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <img
                                            src={
                                         
                                                "/Images/mariannaeng.png"
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-back">
                                        <img
                                            src={
                                        
                                                "/Images/mariannaeng1.png"
                                            }
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button className="about-bloger-list-item">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <img
                                            src={ "/Images/raw.png"}
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-back">
                                        <img
                                            src={ "/Images/raw1.png"}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
