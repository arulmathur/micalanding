import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="lines"
          bg={{
            zIndex: 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "black",
          }}
        />
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="https://forms.gle/sCq2C6FPM7UEvao27"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Join our waitlist
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
