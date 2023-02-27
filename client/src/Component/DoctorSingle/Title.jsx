import React from 'react'

const Title = ({name}) => {
  return (
    <>
      <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Doctor Details</span>
                                <h1 className="text-capitalize mb-5 text-lg">{name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Title
