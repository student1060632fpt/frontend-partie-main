import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import { makeRandomId } from "../../../shared/help";
import { Breadcrumb } from "../common";
import { useHistory } from "react-router-dom";

const PostProject = (props) => {
  const [value, setValue] = useState({
    tokenTitle: "",
    budget:0
  });
  let history = useHistory();
  const {contract_id} = useSelector(state=> state.wallet)
  const onChangeValue = (e) => {
    e.persist();
    if(!e?.target?.value && !e?.target?.name){
      return 
    }
    setValue((prev) => ({
      ...prev,
      [e?.target?.name]: e?.target?.value,
    }));
  };
  const onSubmitJob = async (e) => {
    e.preventDefault();
    const jobsId = makeRandomId();
    const dataInput = {
      purpose: "up jobs",
      para: jobsId,
    };
    const stringData = JSON.stringify(dataInput);
    const rp = stringData.replace(/["]+/g, '"');
    const budget = value.budget*(10**18)
    console.log(value.budget,"budget = ",budget,"budget to string",budget.toString() );
    try {
      
      await contract_id
      .get("ftContractId")
      .ft_transfer_call(
        "staking-test21.thanhdevtest.testnet",
        budget.toString(),
        rp
        )
        history.push("/project")
        
      } catch (error) {
        console.log({error});
      }
  };
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb title="Post a Project" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content px-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="select-project mb-4">
                <form onSubmit={onSubmitJob}>
                  <div className="title-box widget-box">
                    {/* Project Title */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Job Name</h3>
                        <div className="form-group mb-0">
                          <input
                            onChange={onChangeValue}
                            value={value.tokenTitle}
                            type="text"
                            name="tokenTitle"
                            className="form-control"
                            placeholder="Enter Job title"
                          />
                        </div>
                      </div>
                    </div>
                    {/* /Job Title */}
                    {/* Category Content */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Category Type</h3>
                        <div className="form-group mb-0">
                          <select className="form-control select">
                            <option value={0}>Select</option>
                            <option value={1}>Apps Development</option>
                            <option value={2}>UI Development</option>
                            <option value={3}>Jaa</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* /Category Content */}
                    {/* Price Content */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Pricing Type</h3>
                        <div
                          className="form-group price-cont mb-0"
                          id="price_type"
                        >
                          <select name="price" className="form-control select">
                            <option value={0}>Select</option>
                            <option value={1}>Fixed Budget Price</option>
                            <option value={2}>Hourly Pricing</option>
                            <option value={3}>Biding Price</option>
                          </select>
                        </div>
                        <div className="form-group mt-3" id="price_id">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">$</span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              onChange={onChangeValue}
                              value={value.budget}
                              name="budget"
                              aria-label="Amount (to the nearest dollar)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Price Content */}
                    {/* Skills Content */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Desired areas of expertise </h3>
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            data-role="tagsinput"
                            className="input-tags form-control"
                            name="services"
                            defaultValue="Web Design"
                            id="services"
                            placeholder="UX, UI, App Design, Wireframing, Branding"
                          />
                          <p className="text-muted mb-0">
                            Enter skills for needed for project
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* /Skills Content */}
                    {/* Job Period Content */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Period of Job</h3>
                        <div className="form-group mb-0" id="pro_period">
                          <div className="radio">
                            <label className="custom_radio">
                              <input
                                type="radio"
                                defaultValue="period"
                                name="period"
                              />
                              <span className="checkmark" /> Start immediately
                              after the candidate is selected
                            </label>
                          </div>
                          <div className="radio">
                            <label className="custom_radio">
                              <input
                                type="radio"
                                defaultValue="job"
                                name="period"
                                defaultChecked
                              />
                              <span className="checkmark" /> Job will Start On
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div
                              className="filter-widget mb-0"
                              id="period_date"
                            >
                              <div className="cal-icon">
                                <input
                                  type="text"
                                  className="form-control datetimepicker"
                                  placeholder="Select Date"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Job Period Content */}
                    {/* /Add Document */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Add Documents</h3>
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" />
                          <label className="custom-file-label" />
                        </div>
                        <p className="mb-0">
                          Size of the Document should be Below 2MB
                        </p>
                      </div>
                    </div>
                    {/* /Add Document */}
                    {/* Add Links */}
                    <div className="title-content">
                      <div className="title-detail">
                        <h3>Add Links</h3>
                        <div className="links-info">
                          <div className="row form-row links-cont">
                            <div className="col-12 col-md-11">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control" />
                                <p className="mb-0">
                                  Add Reference links if any
                                </p>
                              </div>
                            </div>
                            <div className="col-12 col-md-1">
                              <a href="" className="btn add-links">
                                <i className="fas fa-plus" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Add Links */}
                    {/* Job Title */}
                    <div className="title-content pb-0">
                      <div className="title-detail">
                        <h3>Write Description of Jobs </h3>
                        <div className="form-group mb-0">
                          <ReactSummernote
                            value="Default value"
                            options={{
                              lang: "ru-RU",
                              height: 350,
                              dialogsInBody: true,
                              toolbar: [
                                ["style", ["style"]],
                                ["font", ["bold", "underline", "clear"]],
                                ["fontname", ["fontname"]],
                                ["para", ["ul", "ol", "paragraph"]],
                                ["table", ["table"]],
                                ["insert", ["link", "picture", "video"]],
                                ["view", ["fullscreen", "codeview"]],
                              ],
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* /Job Title */}
                    <div className="row">
                      <div className="col-md-12 text-end">
                        <div className="btn-item">
                          <button type="submit" className="btn next-btn">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Job Title */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default PostProject;
