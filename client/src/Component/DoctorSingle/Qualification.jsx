import React from 'react'

const Qualification = ({qua}) => {
  return (
    <>
      <section className="section doctor-qualification gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h3>My Educational Qualifications</h3>
                                <div className="divider my-4"></div>
                            </div>
                        </div>
                    </div>

                   {
                    qua.map(item=>{
                        return(
                            <> <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                {/* <div className="edu-block mb-5">
                                    <span className="h6 text-muted">{item.qua.year}</span>
                                    <h4 className="mb-3 title-color">{item.qua.qua}</h4>
                                    <p>{item.qua.quaDescription}</p>
                                </div> */}
    
                                <div className="edu-block mb-5">
                                    <span className="h6 text-muted">Year{item?.year}</span>
                                    <h4 className="mb-3 title-color">{item?.qua}</h4>
                                    <p>{item?.quaDescription}</p>
                                </div>
                            </div>
    
                            {/* <div className="col-lg-6">
                                <div className="edu-block mb-5">
                                    <span className="h6 text-muted">Year(2009-2010) </span>
                                    <h4 className="mb-3 title-color">MBBS, M.D at University of Japan</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia,
                                        soluta maxime
                                        porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt
                                        temporibus! Vel quod,
                                        dolor aliquam!</p>
                                </div>
    
                                <div className="edu-block">
                                    <span className="h6 text-muted">Year(2010-2011) </span>
                                    <h4 className="mb-3 title-color">M.D. of Canada Medical College</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia,
                                        soluta maxime
                                        porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt
                                        temporibus! Vel quod,
                                        dolor aliquam!</p>
                                </div>
                            </div> */}
                        </div>

                            </>
                        )
                    })
                   }
                </div>
            </section>
    </>
  )
}

export default Qualification
