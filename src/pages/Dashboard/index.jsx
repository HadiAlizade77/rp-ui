import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";

import "@vtaits/react-color-picker/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "flatpickr/dist/themes/material_blue.css";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

const animatedComponents = makeAnimated();

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

const optionGroup1 = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

const optionGroup2 = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      colorRgb: "red",
      colorCust: "red",
      colorHor: "#fffff",
      colorRGBA: "rgba(0, 194, 255, 0.78)",
      display_RGBA: false,
      multipleDate: new Date(),
      dateRange: new Date(),

      defaultDate: new Date(),
      default: false,
      start_date: new Date(),
      monthDate: new Date(),
      yearDate: new Date(),
      end_date: new Date(),
      date: new Date(),
      default_time: new Date().getTime(),
      minute_time: new Date().getTime(),
      time: new Date().getTime(),

      disbadge: true,
      disthresh: false,
      placementbadge: false,
      textcount: 0,
      optioncount: 0,
      placementcount: 0,
      advanceclass: "badgecount",

      switch1: true,
      switch2: true,
      switch3: true,
      switch4: true,
      switch5: true,
      switch6: true,
      switch7: true,
      switch8: true,
      switch9: true,
      sq1: true,
      sq2: true,
      switch11: true,
      switch12: true,
      switch13: true,
      switch14: true,
      switch15: true,

      data_attr: 56,
      postfix: 20,
      postfix1: 20,
      prefix: 25,
      empty_val: 0,
      not_attr: 15,
      explicit_val: 33,

      selectedGroup: null,
      selectedMulti: null,
      selectedMulti1: null,
      selectedMulti2: null,
      selectedMulti3: null,
      resentValue: null,
    };
    //colorpicker
    this.onDrag = this.onDrag.bind(this);
    this.onDragRgb = this.onDragRgb.bind(this);
    this.onDragCust = this.onDragCust.bind(this);
    this.handleHor = this.handleHor.bind(this);
    this.handleRGBA = this.handleRGBA.bind(this);

    // DatePicker
    this.handleDefault = this.handleDefault.bind(this);
    this.handleAutoClose = this.handleAutoClose.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);

    // Bootsrap Maxlength
    this.threshholdchange = this.threshholdchange.bind(this);
    this.threshholdDefault = this.threshholdDefault.bind(this);
    this.optionchange = this.optionchange.bind(this);
    this.placementchange = this.placementchange.bind(this);
    this.textareachange = this.textareachange.bind(this);

    this.handleSelectGroup = this.handleSelectGroup.bind(this);
    this.handleMulti = this.handleMulti.bind(this);
    this.handleMulti1 = this.handleMulti1.bind(this);
    this.handleMulti2 = this.handleMulti2.bind(this);
    this.handleMulti3 = this.handleMulti3.bind(this);

    //*** datepicker method */
    this.getDateMethod = this.getDateMethod.bind(this);
    this.getDateFormateMethod = this.getDateFormateMethod.bind(this);
    this.getMonthMethod = this.getMonthMethod.bind(this);
    this.getMonthShortMethod = this.getMonthShortMethod.bind(this);
    this.getDayMethod = this.getDayMethod.bind(this);
    this.getDayShort = this.getDayShort.bind(this);
    this.getDayMin = this.getDayMin.bind(this);
    this.picks = this.picks.bind(this);
    this.resentValue = this.resentValue.bind(this);
  }

  //Date Picker Method

  //Color Picker
  onDrag(c1) {
    this.setState({ color: c1 });
  }

  onDragRgb(c1) {
    this.setState({ colorRgb: c1 });
  }

  onDragCust(c1) {
    this.setState({ colorCust: c1 });
  }

  handleHor = (color) => {
    this.setState({ colorHor: color.hex });
  };
  handleRGBA = () => {
    this.setState({ display_RGBA: !this.state.display_RGBA });
  };

  onSwatchHover_RGBA = (color) => {
    const format =
      "rgba(" +
      color.rgb.r +
      "," +
      color.rgb.g +
      "," +
      color.rgb.b +
      "," +
      color.rgb.a +
      ")";
    this.setState({ colorRGBA: format });
  };

  //DatePicker
  handleDefault(date) {
    this.setState({ default_date: date });
  }

  handleAutoClose(date) {
    this.setState({ auto_close: date });
  }

  handleStart(date) {
    this.setState({ start_date: date });
  }

  handleEnd(date) {
    this.setState({ end_date: date });
  }

  handleMonthChange(date) {
    this.setState({ monthDate: date });
  }

  handleYearChange(date) {
    this.setState({ yearDate: date });
  }

  //Bootstrap Maxlength
  threshholdchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      this.setState({ disthresh: true });
    } else {
      this.setState({ disthresh: false });
    }
    this.setState({ threshholdcount: event.target.value.length });
  }

  threshholdDefault(event) {
    const count = event.target.value.length;
    if (count > 0) {
      this.setState({ disDefault: true });
    } else {
      this.setState({ disDefault: false });
    }
    this.setState({ threshholdDefault: event.target.value.length });
  }

  optionchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      this.setState({ disbadge: true });
    } else {
      this.setState({ disbadge: false });
    }
    if (count > 24) {
      this.setState({ advanceclass: "badgecountextra" });
    } else {
      this.setState({ advanceclass: "badgecount" });
    }
    this.setState({ optioncount: event.target.value.length });
  }

  placementchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      this.setState({ placementbadge: true });
    } else {
      this.setState({ placementbadge: false });
    }
    this.setState({ placementcount: event.target.value.length });
  }

  textareachange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      this.setState({ textareabadge: true });
    } else {
      this.setState({ textareabadge: false });
    }
    this.setState({ textcount: event.target.value.length });
  }

  //Select
  handleSelectGroup = (selectedGroup) => {
    this.setState({ selectedGroup });
  };
  handleMulti = (selectedMulti) => {
    this.setState({ selectedMulti });
  };
  handleMulti1 = (selectedMulti1) => {
    this.setState({ selectedMulti1 });
  };
  handleMulti2 = (selectedMulti2) => {
    this.setState({ selectedMulti2 });
  };
  handleMulti3 = (selectedMulti3) => {
    this.setState({ selectedMulti3 });
  };

  /**get date method **/

  getDateMethod = () => {
    this.setState({ dateValue: new Date() });
  };

  picks = () => {
    this.setState({ pick: new Date() });
  };

  resentValue = () => {
    this.setState({ pick: "" });
  };
  yearFirst = () => {};

  getDateFormateMethod = () => {
    var today = new Date();
    const dd = today.getDate().toString();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const fromate_date = (today = dd + "/" + mm + "/" + yyyy);
    this.setState({ fromate_date });
  };

  getMonthMethod = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date();
    const current_month = months[d.getMonth()];
    this.setState({ current_month });
  };

  getMonthShortMethod = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = new Date();
    const current_month_short = months[d.getMonth()];
    this.setState({ current_month_short });
  };
  getDayMethod = () => {
    const day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date();
    const current_day = day[d.getDay()];
    this.setState({ current_day });
  };

  getDayShort = () => {
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = new Date();
    const current_day_short = day[d.getDay()];
    this.setState({ current_day_short });
  };

  getDayMin = () => {
    const day = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const d = new Date();
    const current_day_min = day[d.getDay()];
    this.setState({ current_day_min });
  };

  render() {
    //meta title
    document.title = "configure Scrapper";

    const { selectedGroup } = this.state;
    const { selectedMulti } = this.state;
    const { selectedMulti1 } = this.state;
    const { selectedMulti2 } = this.state;
    const { selectedMulti3 } = this.state;
    const { dateValue } = this.state;

    // state define for datepicker
    const { current_month } = this.state;
    const { fromate_date } = this.state;
    const { current_month_short } = this.state;
    const { current_day } = this.state;
    const { current_day_short } = this.state;
    const { current_day_min } = this.state;
    const { pick } = this.state;

    const Offsymbol = () => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 12,
            color: "#fff",
            paddingRight: 2,
          }}
        >
          {" "}
          No
        </div>
      );
    };

    const OnSymbol = (props) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 12,
            color: "#fff",
            paddingRight: 2,
          }}
        >
          {" "}
          Yes
        </div>
      );
    };

    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>
            <Breadcrumbs title="Forms" breadcrumbItem="Form Advanced" />

            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <h4 className="card-title">Configure a New Task</h4>

                    <form>
                      <Row>
                        <Col lg="6">
                          <div className="mb-3 select2-container">
                            <Label>Board</Label>
                            <Select
                              value={selectedGroup}
                              onChange={this.handleSelectGroup}
                              options={optionGroup}
                              classNamePrefix="select2-selection"
                            />
                          </div>
                          <div className="mb-3 select2-container">
                            <Label>Keyword</Label>
                            <Input
                              type="text"
                              maxLength="25"
                              placeholder="Keyword to search"
                              name="defaultconfig"
                              onChange={this.threshholdDefault}
                              id="defaultconfig"
                            />
                          </div>
                        </Col>

                        <Col lg="6">
                          <FormGroup className="mb-3 ajax-select select2-container">
                            <div className="mb-3 select2-container">
                              <Label>Country</Label>
                              <Select
                                value={selectedMulti}
                                isMulti={true}
                                onChange={this.handleMulti}
                                options={optionGroup}
                                classNamePrefix="select2-selection"
                              />
                            </div>
                            <div className="mb-3 select2-container">
                              <Label>State/City</Label>
                              <Select
                                value={selectedMulti}
                                isMulti={true}
                                onChange={this.handleMulti}
                                options={optionGroup}
                                classNamePrefix="select2-selection"
                              />
                            </div>
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="mb-3 mt-3 mt-lg-0 templating-select select2-container">
                            <label className="control-label">Industry</label>
                            <Select
                              value={selectedMulti3}
                              isMulti={true}
                              onChange={this.handleMulti3}
                              options={optionGroup2}
                              classNamePrefix="select2-selection"
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <h4 className="card-title">Bootstrap MaxLength</h4>
                    <p className="card-title-desc">
                      This plugin integrates by default with Twitter bootstrap
                      using badges to display the maximum lenght of the field
                      where the user is inserting text.{" "}
                    </p>
                    <Label>Default usage</Label>
                    <p className="text-muted m-b-15">
                      The badge will show up by default when the remaining chars
                      are 10 or less:
                    </p>
                    <Input
                      type="text"
                      maxLength="25"
                      name="defaultconfig"
                      onChange={this.threshholdDefault}
                      id="defaultconfig"
                    />
                    {this.state.disDefault ? (
                      <span className="badgecount badge bg-success">
                        {this.state.threshholdDefault} / 25{" "}
                      </span>
                    ) : null}

                    <div className="mt-3">
                      <Label>Threshold value</Label>
                      <p className="text-muted m-b-15">
                        Do you want the badge to show up when there are 20 chars
                        or less? Use the <code>threshold</code> option:
                      </p>
                      <Input
                        type="text"
                        maxLength="25"
                        onChange={this.threshholdchange}
                        name="thresholdconfig"
                        id="thresholdconfig"
                      />
                      {this.state.disthresh ? (
                        <span className="badgecount badge bg-success">
                          {this.state.threshholdcount} / 25{" "}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-3">
                      <Label>All the options</Label>
                      <p className="text-muted m-b-15">
                        Please note: if the <code>alwaysShow</code> option is
                        enabled, the <code>threshold</code> option is ignored.
                      </p>
                      <Input
                        type="text"
                        maxLength="25"
                        onChange={this.optionchange}
                        name="alloptions"
                        id="alloptions"
                      />
                      {this.state.disbadge ? (
                        <span className="badgecount">
                          You Types{" "}
                          <span className="badge bg-success">
                            {this.state.optioncount}
                          </span>{" "}
                          out of <span className="badge bg-success">25</span>{" "}
                          chars available
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-3">
                      <Label>Position</Label>
                      <p className="text-muted m-b-15">
                        All you need to do is specify the <code>placement</code>{" "}
                        option, with one of those strings. If none is specified,
                        the positioning will be defauted to &apos;bottom&lsquo;.
                      </p>
                      <Input
                        type="text"
                        maxLength="25"
                        onChange={this.placementchange}
                        name="placement"
                        id="placement"
                      />
                      {this.state.placementbadge ? (
                        <span
                          style={{ float: "right" }}
                          className="badgecount badge bg-success"
                        >
                          {this.state.placementcount} / 25{" "}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-3">
                      <Label>Textarea</Label>
                      <p className="text-muted m-b-15">
                        Bootstrap maxlength supports textarea as well as inputs.
                        Even on old IE.
                      </p>
                      <Input
                        type="textarea"
                        id="textarea"
                        onChange={this.textareachange}
                        maxLength="225"
                        rows="3"
                        placeholder="This textarea has a limit of 225 chars."
                      />
                      {this.state.textareabadge ? (
                        <span className="badgecount badge bg-success">
                          {" "}
                          {this.state.textcount} / 225{" "}
                        </span>
                      ) : null}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row> */}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
