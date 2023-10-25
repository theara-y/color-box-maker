import { fireEvent, getByLabelText, render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test('render NewBoxForm', () => {
    render(<NewBoxForm/>);
});

test('NewBoxForm snapshot', () => {
    const { asFragment } = render(<NewBoxForm/>);
    expect(asFragment()).toMatchSnapshot()
});