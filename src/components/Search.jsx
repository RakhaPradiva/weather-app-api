import { useState } from "react";
import Button from "./Button";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import Swal from "sweetalert2";
const Search = ({ onSearch, onCurrentLocation }) => {
	const [search, setSearch] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (search.trim() === "") {
			Swal.fire({
				title: "Error!",
				text: "Please enter a city name.",
				icon: "error",
				confirmButtonText: "OK",
			});
			return;
		}
		onSearch(search);
		setSearch("");
	};

	return (
		<div className="flex w-full items-center justify-center gap-5">
			<form
				onSubmit={handleSubmit}
				className="flex w-full items-center justify-end gap-5 md:w-1/2 lg:w-4/5"
			>
				<input
					type="text"
					className="w-full rounded-md bg-transparent px-4 py-2 text-base font-semibold text-white placeholder-white shadow-md ring-1 ring-white focus:outline-none"
					placeholder="Search for a city"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Button icon={<AiOutlineSearch />} type="submit" />
			</form>
			<div className="flex items-center justify-center gap-2">
				<Button icon={<BiCurrentLocation />} handleClick={onCurrentLocation} />
			</div>
		</div>
	);
};

export default Search;
