import "./homediv.css";

import images from "../img";

export default function HomeDiv() {
  return (
    <>
      <div className="">
        <div className="container">
          <div>
            <div className="row align-items-center">
              <div className="col-md-6 col-12 mb-3 mb-md-0 mb-lg-0">
                <img src={images[1]} className="img-fluid img-2 " alt="Image" />
              </div>

              <div className="col-md-6 col-12">
                <p className="text-1 mb-0">
                  Connect with experienced Hindu Pandits online for personalized
                  puja ceremonies. Browse a curated collection of sacred books
                  and rituals. Schedule a video call for spiritual guidance and
                  traditional ceremonies. Experience the divine from the comfort
                  of your home with our virtual Pandit services.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="row mt-5 justify-content-center">
              <div className="col-md-4 col-12 mb-3 mb-md-0 mb-lg-0">
                <div className="book-card d-flex justify-content-center">
                  <div className="card-video">
                    <h4 className="mb-0 text-center">
                      Book your Puja on 1:1 Video Call
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="book-card d-flex justify-content-center">
                  <div className="card-video">
                    <h4 className="mb-0 text-center">
                      Book your Puja on in person visit
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
