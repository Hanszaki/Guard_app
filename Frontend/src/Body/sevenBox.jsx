import React from "react";
import Footer from "./footer";

const sevenBox = () => {
  const img = {
    filter: "invert(1) hue-rotate(180deg)",
  };
  const boxColor = {
    background: "#007BA7",
  };
  const darurat = {
    background: "#ff0000",
  };
  return (
    <box id="" className="p-2">

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="d-flex col pt-3 mt-2">
        
        <div id="kolom" className="column is-one-two">
          <div className="container column rounded-3">
            <div className="row">
              {/* Kotak 1 */}
              <div className="col-md-4">
                <a
                  href="/tamu"
                  className="button box m-auto larger-box icon-square text-link"
                  style={boxColor}
                >
                  <img
                    width="80"
                    height="80"
                    src="https://img.icons8.com/sf-regular/100/user-group-man-man.png"
                    alt="user-group-man-man"
                    style={img}
                  />
                  <p className="text-inside-box has-text-white">Tamu</p>
                </a>
              </div>

              {/* Kotak 2 */}
              <div className="col-md-4">
                <a
                  href="/inout"
                  className="button box m-auto larger-box icon-square text-link"
                  style={boxColor}
                >
                  <img
                    className="p-2"
                    width="80"
                    height="80"
                    src="https://img.icons8.com/material-outlined/100/refresh--v1.png"
                    alt="refresh--v1"
                    style={img}
                  />
                  <p className="text-inside-box has-text-white">In Out</p>
                </a>
              </div>

              {/* Kotak 3 */}
              <div className="col-md-4">
                <a
                  href="/mutasi"
                  className="button box m-auto larger-box icon-square text-link"
                  style={boxColor}
                >
                  <img
                    width="80"
                    height="80"
                    src="https://img.icons8.com/material-outlined/100/data-in-both-directions.png"
                    alt="data-in-both-directions"
                    style={img}
                  />
                  <p className="text-inside-box has-text-white">Mutasi</p>
                </a>
              </div>

              {/* Kotak 4 */}
              <div className="col-md-4">
                <a
                  href="/patroli"
                  className="button box m-auto larger-box icon-square text-link"
                  style={boxColor}
                >
                  <img
                    width="80"
                    height="80"
                    src="https://img.icons8.com/windows/100/policeman-male--v1.png"
                    alt="policeman-male--v1"
                    style={img}
                  />
                  <p className="text-inside-box has-text-white">Patrol</p>
                </a>
              </div>

              {/* Kotak 5 */}
              <div className="col-md-4">
                <a
                  href="/lapdi"
                  className="button box m-auto larger-box icon-square text-link"
                  style={boxColor}
                >
                  <img
                    width="80"
                    height="80"
                    src="https://img.icons8.com/ios/100/health-graph.png"
                    alt="health-graph"
                    style={img}
                  />
                  <p className="text-inside-box has-text-white">Lapdi</p>
                </a>
              </div>

              {/* Kotak 6 */}
              <div className="col-md-4">
                <a
                href="/bap"
                  className="button box m-auto larger-box icon-square text-link"
                  style={boxColor}
                >
                  <img
                    width="80"
                    height="80"
                    src="https://img.icons8.com/ios/100/task.png"
                    alt="task"
                    style={img}
                  />
                  <p className="text-inside-box has-text-white">B.A.P</p>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="/ekspedisi"
                  className="button box m-auto larger-box icon-square text-link"
                  style={boxColor}
                >
                  <img
                    width="80"
                    height="80"
                    src="https://img.icons8.com/material-outlined/100/delivery.png"
                    alt="delivery"
                    style={img}
                  />

                  <p className="text-inside-box has-text-white">B.Expedisi</p>
                </a>
              </div>

              {/* Kotak 5 */}
              <div className="col-md-4">
                <a
                  className="button box m-auto larger-box icon-square text-link"
                  style={boxColor}
                  href="/asset"
                >
                  <img
                    width="80"
                    height="80"
                    src="https://img.icons8.com/material-outlined/100/company-assets-.png"
                    alt="company-assets-"
                    style={img}
                  />
                  <p className="text-inside-box has-text-white">Asset</p>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="/darurat"
                  className="button box m-auto larger-box icon-square text-link"
                  style={darurat}
                >
                  <img
                    width="80"
                    height="80"
                    src="https://img.icons8.com/ios-glyphs/90/error--v1.png"
                    alt="error--v1"
                    style={img}
                  />

                  <p className="text-inside-box has-text-white">Darurat</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </box>
  );
};

export default sevenBox;
