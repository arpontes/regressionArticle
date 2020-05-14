import React from "react";
import { ButtonWrp } from "./button";
import renderer from 'react-test-renderer';

test('Renderizando botão', () => {
    const btn = renderer.create(<ButtonWrp desc="Meu Teste" showBorder />).toJSON();
    expect(btn).toMatchSnapshot();
});


