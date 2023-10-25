import { render } from "@testing-library/react";
import Box from "./Box";

test('render Box', () => {
    render(<Box/>);
});

test('Box snapshot', () => {
    const { asFragment } = render(<Box/>);
    expect(asFragment()).toMatchSnapshot()
});