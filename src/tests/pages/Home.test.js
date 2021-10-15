import { shallow } from "enzyme";
import Home from "../../pages/Home";
import React from "react";

describe("Pruebas del componente <Home/>", () => {
  //Arrange
  const wrapper = shallow(<Home />);

  test("Comprobar que corra el componente", () => {
    //Como es solo para revisar que funcione y el componente no tiene acciones
    //El Assert sera un snapshot
    expect(wrapper).toMatchSnapshot();
  });

  //Prueba del titulo
  test("Debe de mostrar el valor del titulo", () => {
    //Arrange
    const titulo = "Bienvenido a Chatty";
    //Act
    const textoTitulo = wrapper.find("h1").text();
    
    //Assert
    expect(textoTitulo).toBe(titulo);
  });

  //Prueba del texto
    //Puedo hacer pruebas de elementos
  test("Debe de mostrar el valor del texto", () => {
    //Arrange
    const texto = "Un lugar para compartir por medio de un chat con tus amigos";
    //Act
    const textoTexto = wrapper.find("p").text();
    
    //Assert
    expect(textoTexto).toBe(texto);
  });

});
