import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Flags_en,
  Logo_01,
} from "../../../imagepath";

const ModalHireFreelancer = ({modal}) => {
  const { isSignedIn, contract_id } = useSelector((state) => state.wallet);
  const param = useParams();
  const projectId = param?.id;

  const submitStartJobs = async (e) => {
    e.preventDefault()
    try {
      console.log(projectId,"projectId, modal.freelancer_id", modal.freelancer_id);
      await contract_id.get("stakingContractId").start_jobs(projectId, modal.freelancer_id);
    } catch (error) {
      console.log({error});
    }
  };
  return (
    <>
      <div className="modal fade custom-modal" id="hire">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-modal">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="text-center pt-0 mb-4">
                <img src={Logo_01} alt="logo" className="img-fluid mb-1" />
                <h5 className="modal-title">Discuss your project with David</h5>
              </div>
              <form onSubmit={submitStartJobs}>
                <div className="modal-info">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="First name & Lastname"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="name"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={5}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-12 col-md-4 pr-0">
                          <label className="file-upload">
                            Add Attachment <input type="file" />
                          </label>
                        </div>
                        <div className="col-12 col-md-8">
                          <p className="mb-1">
                            Allowed file types: zip, pdf, png, jpg
                          </p>
                          <p>Max file size: 50 MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block submit-btn"
                  >
                    Hire Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalHireFreelancer;
