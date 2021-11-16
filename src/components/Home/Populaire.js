import React, { Component } from 'react';

const Populaire = () => {
    return (
        <section class="blog-wrap" id="blog">            
        <div class="container-fluid">
            <h2 class="title-blog wow fadeInUp">Populaires</h2>
                <div class="hr"></div>
                <p class="subtitle-blog wow fadeInUp">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</p>
            <div class="row">
                <div class="col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="card">
                        <figure class="text-center">
                            <img src="https://www.setupgame.ma/wp-content/uploads/2021/05/PC-GAMER-INTEL-CORE-I9-10850KF-RTX-3090-%E2%80%93-COUGAR-CONQUER-Setup-Game.jpg" class="img-fluid" />
                        </figure>
                        <div class="card-body">
                            <h5 class="card-title">PC Gamer intel core I9 10850K-RTX 3090</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus.</p>
                            <a href="" class="">Read more</a>
                            </div>
                    </div>
                </div>
                <div class="col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="card">
                        <figure class="text-center">
                            <img src="https://www.setupgame.ma/wp-content/uploads/2021/05/PC-GAMER-AMD-RYZEN-5-5600X-RTX-2060-%E2%80%93-MARS-GAMING-MCA500-NOIR-Setup-Game.jpg" class="img-fluid" />
                        </figure>
                        <div class="card-body">
                            <h5 class="card-title">PC GAMER AMD RAIZEN 5 5600X-RTX 2060</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus.</p>
                            <a href="" class="">Read more</a>
                            </div>
                    </div>
                </div>
                <div class="col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="card">
                        <figure class="text-center">
                            <img src="data:image/jpeg;base64,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" class="img-fluid" />
                        </figure>
                        <div class="card-body">
                            <h5 class="card-title">EDIFIER G4 SE 3.5mm GAMING HEADEST 40mm DRIVER UNIT L-TYPE</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus.</p>
                            <a href="" class="">Read more</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Populaire