import { render } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should render ResturantCard component with propsData", () => {
    render(
        <ResturantCard resData={MOCK_DATA} />
    )
    const name = screen.getByText("Aubree");
    expect(name).toBeInTheDocument();
});