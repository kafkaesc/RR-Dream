import { render, screen } from '@testing-library/react';
import ColorBox from './ColorBox';

it('Returns null Without a className', () => {
	render(<ColorBox />);
	const box = screen.queryByRole('listitem');
	expect(box).not.toBeInTheDocument();
});

it('Renders a Rail-Darkblue Box', () => {
	render(<ColorBox className="bg-rail-darkblue" />);
	const box = screen.getByRole('listitem');
	expect(box).toBeInTheDocument();
	expect(box).toHaveClass('bg-rail-darkblue');
	expect(box).toHaveClass('border-rail-black');
});

it('Renders a Rail-Gray Box', () => {
	render(<ColorBox className="bg-rail-gray" />);
	const box = screen.getByRole('listitem');
	expect(box).toBeInTheDocument();
	expect(box).toHaveClass('bg-rail-gray');
	expect(box).toHaveClass('border-rail-black');
});

it('Renders a Rail-White Box', () => {
	render(<ColorBox className="bg-rail-white" />);
	const box = screen.getByRole('listitem');
	expect(box).toBeInTheDocument();
	expect(box).toHaveClass('bg-rail-white');
	expect(box).toHaveClass('border-rail-black');
});

it('Renders a Rail-Pink Box', () => {
	render(<ColorBox className="bg-rail-pink" />);
	const box = screen.getByRole('listitem');
	expect(box).toBeInTheDocument();
	expect(box).toHaveClass('bg-rail-pink');
	expect(box).toHaveClass('border-rail-black');
});

it('Renders a Rail-Red Box', () => {
	render(<ColorBox className="bg-rail-red" />);
	const box = screen.getByRole('listitem');
	expect(box).toBeInTheDocument();
	expect(box).toHaveClass('bg-rail-red');
	expect(box).toHaveClass('border-rail-black');
});
