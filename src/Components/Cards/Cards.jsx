import React from 'react';

const cards = ({ pricingData }) => {
    return (
        <>
            <section class="container mt-4 ">
                <div class="pt-3 pb-5">
                    <h1 class="text-center">Pricing Plan</h1>
                </div>
                <div class="row row-cols-1 g-4 row-cols-md-3">
                    {pricingData.map((element, index) => {
                        return (
                            <div class="cols">
                                <div class="bg-info bg-opacity-10 border border-info rounded p-5">
                                    <div class="card-header text-center">
                                        <h5 class="card-title text-primary">{element.title}</h5>
                                        <h2 class="card-text">{element.price}</h2>
                                    </div>
                                    <div class={`card-body ${element.text}`}>
                                        <hr class="" />
                                        <p><i class={element.projectIcon} aria-hidden="true"></i> <span class="card-text text-dark"> {element.user}</span></p>
                                        <p><i class={element.projectIcon} aria-hidden="true"></i> <span class="card-text">{element.storage}</span></p>
                                        <p><i class={element.projectIcon} aria-hidden="true"></i> <span class="card-text">{element.email}</span></p>
                                        <p><i class={element.projectIcon} aria-hidden="true"></i> <pspan class="card-text">{element.support}</pspan></p>
                                    </div>
                                    <div class="card-footer border-success">
                                        <hr class="" />
                                        <div class="d-grid gap-2">
                                            <button class="btn btn-primary" type="button">Choose Plan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    
                </div>
            </section>
        </>
    );
};

export default cards;