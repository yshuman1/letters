import React from "react";
import {
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import "./Search.css";

export default class Search extends React.Component {
  render() {
    return (
      <div className="search-box">
        <div className="row search-row">
          <div className="col-4" />
          <div className="col-4">
            <div>
              <Button color="warning" size="lg" block>
                Send A Kid Their First Letter
              </Button>{" "}
            </div>
          </div>
          <div className="col-4" />
        </div>
        <div className="row search-row">
          <div className=" search-input col-6">
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="Search by name"
                />
              </FormGroup>
              <Button color="secondary">Search</Button>{" "}
            </Form>
          </div>
          <div className="col-3">
            <div>
              <Button color="primary">All</Button>{" "}
              <Button color="info">Boys</Button>{" "}
              <Button color="success">Girls</Button>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
