import React from 'react';

const Cv = () => {
    return (
        <div>
            <h1>Резюме</h1>
            <div className="row">
                <div className="col-md-9">
                    <img src="https://i.ibb.co/Z2LCfBC/85915-cyberpunk-2077-2021-games-games-hd-4k-ps-games.jpg" alt=""
                         style={{width: '100%'}}/>
                    <br/>
                    <br/>
                    <div style={{borderTop: 'solid 2px purple'}}>
                        <br/>
                        <p style={{textIndent: '5%'}}>
                            Я, являю из себя обыкновенного гения, кумира поколения, очень многое умею,
                            пишу, читаю, рисую,
                            программирую,
                            способен на всё. Супермен, а кто ж еще? Собственно я, временно сдам себя в
                            аренду для любого
                            великолепного
                            занятия. Главное чтобы мне, было где разгулять свои мозги. Которые на всё
                            способны. За сим я
                            откланиваюсь и
                            ожидаю писем ваших. Посмотреть на текст и рисунки меня, в собственно,
                            журнале моем. Я вас люблю.
                            Hо
                            требую!
                            Работу...
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://i.ibb.co/Lzn17Pb/38a04e62725691-5a996405d4ca0.jpg" className="card-img-top"
                             alt="" style={{width: '100%'}}/>
                        <div className="card-body">
                            <p className="card-text">Свиткин Артур</p>
                            <p className="card-text">Web-developer</p>
                            <a href="https://t.me/GreatJinn">
                                <img src="https://i.ibb.co/GCqB6N4/telegram.png" alt="" style={{width: '20%'}}/>
                            </a>
                            <a href="https://github.com/Chancellor-Arthur">
                                <img src="https://i.ibb.co/gjyb3mr/unnamed.jpg" alt="" style={{width: '20%'}}/>
                            </a>
                            <a href="https://vk.com/grand_shogun"><img
                                src="https://i.ibb.co/3vK37KJ/5ded53183a22616ee70c96ae.png" alt=""
                                style={{width: '20%'}}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cv;