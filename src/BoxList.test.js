import { fireEvent, queryByTestId, render, screen } from "@testing-library/react";
import BoxList from "./BoxList";

test('render BoxList', () => {
    render(<BoxList/>);
});

test('BoxList snapshot', () => {
    const { asFragment } = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot()
});

test('submit form and delete box', () => {
    const {getByLabelText, getByText, getByTestId, queryByTestId} = render(<BoxList/>);
    const colorInput = getByLabelText("Color");
    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");
    const submitBtn = getByText("Create Box");

    fireEvent.change(colorInput, {target: {value: "tomato"}});
    fireEvent.change(widthInput, {target: {value: 100}});
    fireEvent.change(heightInput, {target: {value: 100}});
    fireEvent.click(submitBtn)

    getByTestId("box0")

    const deleteBtn = getByText("X");
    fireEvent.click(deleteBtn);

    expect(
        queryByTestId("box0")
    ).not.toBeInTheDocument()
})