const Textarea = (props) => {
    const { placeholder, name } = props;
    return (
        <textarea name={name} placeholder={placeholder} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 outline:blue-500"></textarea>
    )
}

export default Textarea;