import { shallow } from "enzyme";
import Header from "../../components/Header";
import React from "react";

describe("Pruebas del componente <Header/>", () => {
  //Arrange
  const wrapper = shallow(<Header />);

  test("Comprobar que corra el componente", () => {
    //Como es solo para revisar que funcione y el componente no tiene acciones
    //El Assert sera un snapshot
    expect(wrapper).toMatchSnapshot();
  });

});
