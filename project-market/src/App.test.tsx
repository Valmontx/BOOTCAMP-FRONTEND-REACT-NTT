import { act, render, RenderResult, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { ModuleRoutes } from "./module-routes";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { uploadProductsRequest } from "./services/api";
import { productResponseMock } from "./services/__mock__/productsMock";





const renderComponent = async (initialEntries = [ModuleRoutes.Home]): Promise<RenderResult> => {
    const component = await act(async () =>
        render(
            <MemoryRouter initialEntries={initialEntries}>
                <App />
            </MemoryRouter>
        )
    );
    return component!;
};


describe("YouMarket App", () => {
    it("renders Home page and shows products correctly", async () => {
        jest.spyOn(uploadProductsRequest, "uploadProducts").mockResolvedValue(productResponseMock);
        await renderComponent();

        expect(await screen.findByText("Black friday! 24Hours only 50% OFF")).toBeInTheDocument();
        expect(await screen.findByText("Essence Mascara Lash Princess")).toBeInTheDocument();
        expect(await screen.findByText("Eyeshadow Palette with Mirror")).toBeInTheDocument();
        expect(await screen.findByText("$9.99")).toBeInTheDocument();
        expect(await screen.findByText("$19.99")).toBeInTheDocument();
        expect(await screen.findByText("Low Stock")).toBeInTheDocument();
    });
});