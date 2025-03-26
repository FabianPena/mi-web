import React from 'react';

import {render, screen} from "@testing-library/react";
import Saludo from "./Saludo";

test("Muestra el mensaje de saludo con el nombre entregado.",
    () => {
        render(<Saludo nombre="Fabián"/>);
        expect(screen.getByText("Hola, Fabián")).toBeInTheDocument();
    }
);