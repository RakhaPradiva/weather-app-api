const Button = ({ title, icon, type, handleClick }) => {
	return (
		<button
			onClick={handleClick ? handleClick : null}
			type={type || "button"}
			className="bg-transparent text-2xl text-white focus:outline-none"
		>
			{title || icon}
		</button>
	);
};

export default Button;
