

import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="container">
                <div className="about">
                    <div className="about-head">
                        <div className="about-img">
                            <h5>{t('about.title')}</h5>
                            <p>{t('about.desc')}</p>
                            <p>{t('about.goals')}</p>
                        </div>
                        <div className="girls-hcpro-img">
                            <img src= "/Images/girls-hcpro.jpg" alt="help clean pro" />
                        </div>
                    </div>
                    {/* <div className="about-list">
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
                                src= "/Images/aboutlogo.png"
                                alt="help clean pro"
                            />
                        </div>
                    </div> */}
                </div>
            </div>
            <img
                src= "/Images/divider1.png"
                alt="help clean pro"
                style={{ width: "100%" }}
                className="divider"
            />
            <div className="container">
                <div className="about-us">
                    <h5 className="about-us-title">{t('about.why_us')}</h5>
                    <p className="about-us-text" dangerouslySetInnerHTML={{__html: t('about.why_us_text')}} />
                    <div className="about-us-list">
                        <div className="about-list-item about-us-list-item about-us-list-item-1">
                            <p className="about-list-item-num about-us-list-item-num">01</p>
                            <h6 className="about-list-item-title">{t('about.professionalism')}</h6>
                            <p className="about-list-item-text">{t('about.professionalism_text')}</p>
                        </div>
                        <div className="about-list-item about-us-list-item about-us-list-item-2">
                            <p className="about-list-item-num ">02</p>
                            <h6 className="about-list-item-title">{t('about.quality')}</h6>
                            <p className="about-list-item-text">{t('about.quality_text')}</p>
                        </div>
                        <div className="about-list-item about-us-list-item about-us-list-item-2">
                            <p className="about-list-item-num ">03</p>
                            <h6 className="about-list-item-title">{t('about.individual')}</h6>
                            <p className="about-list-item-text">{t('about.individual_text')}</p>
                        </div>
                        <div className="about-list-item about-us-list-item about-us-list-item-1">
                            <p className="about-list-item-num about-us-list-item-num">04</p>
                            <h6 className="about-list-item-title">{t('about.flexibility')}</h6>
                            <p className="about-list-item-text">{t('about.flexibility_text')}</p>
                        </div>
                        <div className="about-list-item about-us-list-item about-us-list-item-1">
                            <p className="about-list-item-num about-us-list-item-num">05</p>
                            <h6 className="about-list-item-title">{t('about.eco')}</h6>
                            <p className="about-list-item-text">{t('about.eco_text')}</p>
                        </div>
                        <div className="about-list-item about-us-list-item about-us-list-item-2 about-us-list-item-last">
                            <p>{t('about.trust')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src= "/Images/divider2.png"
                alt="help clean pro"
                style={{ width: "100%" }}
                className="divider"
            />
            <div className="container">
                <div className="about-bloger">
                    <div className="about-bloger-head">
                        <h5 className="about-bloger-title">{t('about.trusted_by')}</h5>
                        <p className="about-bloger-text">{t('about.trusted_by_text')}</p>
                    </div>

                    <div className="about-bloger-list">
                        <a className="about-bloger-list-item" href="https://nugabest.ua/" target="_blank">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <img
                                            src={
                                              "/Images/nugabest.png"
                                            }
                                            alt="help clean pro"
                                        />
                                    </div>
                                    <div className="card-back">
                                        <img
                                            src={
                                              
                                                "/Images/nugabest1.png"
                                            }
                                            alt="help clean pro"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="about-bloger-list-item"  href="https://www.marianna-english.com.ua/" target="_blank">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <img
                                            src={
                                         
                                                "/Images/mariannaeng.png"
                                            }
                                            alt="help clean pro"
                                        />
                                    </div>
                                    <div className="card-back">
                                        <img
                                            src={
                                        
                                                "/Images/mariannaeng1.png"
                                            }
                                            alt="help clean pro"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* <a className="about-bloger-list-item" href="https://www.instagram.com/raw.photostudio.pl/" target="_blank">
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <img
                                            src={ "/Images/raw.png"}
                                            alt="help clean pro"
                                        />
                                    </div>
                                    <div className="card-back">
                                        <img
                                            src={ "/Images/raw1.png"}
                                            alt="help clean pro"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
