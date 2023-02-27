import React from 'react'

const Skills = ({exp,skill}) => {
  return (
    <>
      <section className="section doctor-skills">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>My skills</h3>
                            <div className="divider my-4"></div>
                            <p>{skill}</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="skill-list">
                                <h5 className="mb-4">Expertise area</h5>
                                <ul className="list-unstyled department-service">
                                   {
                                      exp.map(item=>{
                                        return(
                                            <>
                                            <li><i className="icofont-check mr-2"></i>{item.exp}</li>
                                            <li><i className="icofont-check mr-2"></i>{item.exp}</li>
                                            <li><i className="icofont-check mr-2"></i>{item.exp}</li>
                                            </>
                                        )
                                      })
                                   }
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-widget  gray-bg p-4">
                                <h5 className="mb-4">Make Appoinment</h5>

                                <ul className="list-unstyled lh-35">
                                    <li className="d-flex justify-content-between align-items-center">
                                        <span>Monday - Friday</span>
                                        <span>9:00 - 17:00</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center">
                                        <span>Saturday</span>
                                        <span>9:00 - 16:00</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>

                                <div className="sidebar-contatct-info mt-4">
                                    <p className="mb-0">Need Urgent Help?</p>
                                    <h3 className="text-color-2">+23-4565-65768</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Skills


