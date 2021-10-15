import { shallow } from "enzyme";
import Footer from "../../components/Footer";
import React from "react";

describe("Pruebas del componente <Footer/>", () => {
  //Arrange
  const wrapper = shallow(<Footer />);

  test("Comprobar que corra el componente", () => {
    //Como es solo para revisar que funcione y el componente no tiene acciones
    //El Assert sera un snapshot
    expect(wrapper).toMatchSnapshot();
  });

  //Puedo hacer pruebas de elementos
  test("Debe de mostrar el valor del texto", () => {
    //Arrange
    const texto = "Chatty 2021.";
    //Act
    const textoFooter = wrapper.find("p").text();
    //Assert
    expect(textoFooter).toBe(texto);
  });
});
