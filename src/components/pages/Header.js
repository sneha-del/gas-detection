import React from 'react'

const Header = () => {
  return (
    <div>
         <section className="header">
          <div className="logo">
            <img
              src="./images/logo.png"
              alt="logo"
              style={{
                height: "50px",
                width: "150px",
                marginLeft: "10%",
                padding: "10px",
              }}
            />
          </div>

          <div className="banner">
            <img
              src="./images/strip.png"
              alt="banner"
              style={{ width: "100%" }}
            />
          </div>
        </section>
    </div>
  )
}

export default Header