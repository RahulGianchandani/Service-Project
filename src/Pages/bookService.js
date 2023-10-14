import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Step, Stepper } from "react-form-stepper";
import moment from "moment";

const BookService = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [serviceSelect, setServiceSelect] = useState(0);
  const [serviceName, setServiceName] = useState("");
  const [checked, setChecked] = useState(false);
 
  const [date, setDate] = useState(
    moment().startOf("day").format("YYYY-MM-DD hh:mm")
  );
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    city: "",
    message: "",
  });
  console.log("formData", formData);

  const handleChange = (e) => {
    const { value, name } = e.target;
    // const name = e.target.name

    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage + 1)
    } else {
      alert("UNDER WORK, THANKS")
    }
  };

  return (
    <div id="homePage">


      <section id="appointFormSec">
        <h1 className="text-center h1 theme-blue-color  mb-24 pt-32 max-md:pt-14 max-md:mb-10">
          Select a Service
        </h1>
        <div className="container pb-36 max-md:pb-12">
          <Stepper activeStep={currentPage} className="mb-14 max-md:mb-6">
            <Step label="Services" className="step1" />
            {/* <Step label="Date & Location" className="step2" /> */}
            <Step label="Details" className="step2" />
          </Stepper>

          {currentPage === 0 && (
            <>
              <h3 className="mb-14 h3 max-md:mb-8 theme-dark-blue fw-bold text-center ">
                Choose Service
              </h3>
              <section id="serviceSec">
                <div className="container max-w-[1350px]">
                  <div
                    id="treatments"
                    className="grid grid-cols-3 gap-5 max-sm:grid-cols-1"
                  >
                    <div
                      className={`service service1  duration-300 h-52 ${serviceSelect === 1 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("Service1");
                        setServiceSelect(1);
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 mt-3 mb-6">
                          Service1
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                    <div
                      className={`service service2  duration-300 h-52 ${serviceSelect === 2 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("Service2");
                        setServiceSelect(2);
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8">
                          Service2
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                    <div
                      className={`service service3  duration-300 h-52 ${serviceSelect === 3 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("Service3");
                        setServiceSelect(3);
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8">
                          Service3
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                    <div
                      className={`service service4  duration-300 h-52 ${serviceSelect === 4 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("Service4");
                        setServiceSelect(4);
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8">
                          Service4
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                    <div
                      className={`service service5  duration-300 h-52 ${serviceSelect === 5 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("Service5");
                        setServiceSelect(5);
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 mt-3 mb-6">
                          Service5
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                    <div
                      className={`service service6  duration-300 h-52 b ${serviceSelect === 6 && "SelectedService"
                        }`}
                      onClick={() => {
                        setServiceName("Service6");
                        setServiceSelect(6);
                      }}
                    >
                      <div className="relative mainTextDiv">
                        <h6 className="text-white text-center h2 mt-3 mb-6">
                          Service6
                        </h6>
                        <div className="text-white text-center textDiv "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* {currentPage === 1 && (
            <>
              <h3 className="mb-14 h3 max-md:mb-8 theme-dark-blue fw-bold text-center ">
                Choose Date and Time
              </h3>
              <section id="DtLocSec">
                <div className="container max-w-[1350px]">
                  <div className="row justify-center">
                    <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-5 col-8 dateDiv">
                      <Datetime
                        onChange={(value) => setDate(value)}
                        initialValue={date}
                      />
                    </div>
                    <div className="locationsDiv">
                      <h3 className="mt-14 mb-14 h3 theme-dark-blue fw-bold text-center ">
                        Choose Closet Clinic
                      </h3>
                      <div className="d-flex gap-5">
                        <div
                          onClick={() => {
                            setClinicName("North, Tamra North Road");
                            setMapSelect(1);
                          }}
                          className="col mapsDiv relative"
                        >
                          <iframe
                            className={`maps  duration-300 ${
                              mapSelect === 1 && "SelectedService"
                            }`}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.276234777326!2d35.18631!3d32.86441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dca9a3e03c6c5%3A0x47af1042f792feb1!2sNorthern%20Road%2FTamra!5e0!3m2!1sen!2s!4v1695833819264!5m2!1sen!2s"
                            width="100%"
                            height="300px"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                        <div
                          onClick={() => {
                            setClinicName(
                              "The Center, 96 Zeytim St Givat Shmuel Or building in Givat"
                            );
                            setMapSelect(2);
                          }}
                          className="col mapsDiv relative"
                        >
                          <iframe
                            className={`maps duration-300 ${
                              mapSelect === 2 && "SelectedService"
                            }`}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d432691.3673359095!2d34.852524!3d32.085438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a033cf150eb%3A0xe503ce74e939a47a!2sHa-Zeitim%20St%2096%2C%20Giv&#39;at%20Shmu&#39;el%2C%20Israel!5e0!3m2!1sen!2sus!4v1695831105312!5m2!1sen!2sus"
                            width="100%"
                            height="300px"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )} */}

          {currentPage === 1 && (
            <>
              <h3 className="mb-14 max-md:mb-8 h3 theme-dark-blue fw-bold text-center ">
                Fill the form
              </h3>

              <section id="detailSec">
                <div className="container max-w-[1350px]">
                  <div className="d-flex justify-center">
                    <div className="">
                      <div
                        id="detailsSavedDiv"
                        className="d-flex justify-center"
                      >
                        <div id="">
                          <h6 className="h6 theme-blue-color fw-bold">
                            Service Selected:{" "}
                            <span className="text-[#8d8d8d]">
                              {serviceName}
                            </span>
                          </h6>
                          {/* <h6 className="h6 theme-blue-color fw-bold">
                            Clinic:{" "}
                            <span className="text-[#8d8d8d]">{clinicName}</span>
                          </h6> */}
                          {/* <h6 className="h6 theme-blue-color fw-bold">
                            Appointment Date:{" "}
                            <span className="text-[#8d8d8d]">
                              {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
                            </span>
                          </h6> */}
                        </div>
                      </div>

                      <section id="formSec" className=" bg-[#ffffff12] mt-4">
                        <div className="container pt-16 pb-10 max-md:pb-2">
                          <div className="d-flex justify-center gap-16">
                            <form className=" bg-slate-400  ">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your full name.."
                                onChange={handleChange}
                              />
                              <input
                                type="number"
                                id="number"
                                name="number"
                                placeholder="Your number.."
                                onChange={handleChange}
                              />
                              <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="Your city.."
                                onChange={handleChange}
                              />
                              <textarea
                                id="subject"
                                className=" h-40 "
                                name="message"
                                placeholder="Write message.."
                                onChange={handleChange}
                              ></textarea>
                              <input  onChange={(e) => setChecked(e.target.checked)} name="terms" type="checkbox" className="align-middle mr-2" id="checkBox" />
                              <label className="text-xs mb-12" for="checkBox">By submitting an application,<button type="button" className=" theme-blue-color cursor-pointer" data-bs-toggle="modal" data-bs-target="#termsModal">You agree to the terms and conditions and privacy policy.</button></label>
                            </form>
                          </div>

                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          <div id="Btns" className="text-end max-md:!text-center">
            <button
              id="nxtBtn"
              className="disabled:cursor-not-allowed disabled:opacity-60"
              disabled={
                (currentPage === 0 && serviceSelect === 0) ||
                (currentPage === 1 &&
                  (formData?.name === "" ||
                    formData?.number === "" ||
                    formData?.city === "" ||
                    formData?.message === "" || !checked))
              }
              onClick={() => handleNext()}
            >
              {currentPage === 1 ? "Submit Order" : "Next"}
            </button>
            <button
              id="prvBtn"
              className="ml-3 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={currentPage <= 0}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          </div>
        </div>
      </section>



      <div class="modal fade" id="termsModal" tabindex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title h5 fw-bold">Terms And Conditions</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum Lorep ipsum.</p>
            </div>
            <div class="modal-footer">
              <button id="nxtBtnn"  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Okay</button>
            </div>
          </div>
        </div>
      </div>


    </div>

  );
};

export default BookService;
