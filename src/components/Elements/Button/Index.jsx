const Button = (props) => {
    const { children = ".....", classname = "bg-black" } = props;
    return (
        <button
            className={`h-10 px-6 font-semibold rounded-md ${classname} text-white border border-blue-100`}
        >
            {children}
        </button>
    );
};

export default Button;