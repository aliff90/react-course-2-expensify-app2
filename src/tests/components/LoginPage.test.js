import React from "react";
import { shallow } from "enzyme";
import {LoginPage} from "../../components/LoginPage";

test("shold render login page", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test("should call in on button click", () =>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find("button").simulate("click");
    expect(startLogin).toHaveBeenCalled();
});