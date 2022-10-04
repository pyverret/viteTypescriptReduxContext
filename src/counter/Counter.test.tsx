import {render, screen} from "@testing-library/react";
import Counter from './Counter';

test('Counter', () => {
    render(<Counter />);

    expect(screen.getByRole('button', {name: 'Add'})).toBeInTheDocument();
})