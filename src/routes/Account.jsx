export default function Account() {
	return (
		<main className="mt-16 mb-32 px-10 lg:px-32">
			<div className="flex justify-between my-16 flex-col md:flex-row gap-5">
				<div>
					<span className="text-slate-400">Home / </span>
					<span>Account</span>
				</div>
				<div>
					Welcome <span className="text-red-500">Divyanshu</span>
				</div>
			</div>
			<section className="flex justify-between gap-60 flex-col md:flex-row">
				<aside className="hidden md:flex flex-col">
					<div className="my-3">Manage My Account</div>
					<div className="text-red-500 font-light ml-10">
						My Profile
					</div>
					<div className="text-gray-500 font-light ml-10">
						Address Book
					</div>
					<div className="text-gray-500 font-light ml-10">
						My Payment Options
					</div>
					<div className="my-3">My Orders</div>
					<div className="text-red-500 font-light ml-10">
						My Returns
					</div>
					<div className="text-gray-500 font-light ml-10">
						My Cancellations
					</div>
					<div className="my-3">My Wishlist</div>
				</aside>
				<section className="shadow-lg p-7 grow">
					<div className="text-red-500 text-xl">
						Edit Your Profile
					</div>
					<div className="flex justify-between gap-10 flex-wrap mt-8">
						<label
							htmlFor="firstName"
							className="flex flex-col grow"
						>
							First Name
							<input
								type="text"
								id="firstName"
								name="firstName"
								value="Divyanshu"
								className="bg-gray-100 rounded my-2 py-1 px-3 text-gray-500"
							/>
						</label>
						<label
							htmlFor="lastName"
							className="flex flex-col grow"
						>
							Last Name
							<input
								type="text"
								id="lastName"
								name="lastName"
								value="Singh"
								className="bg-gray-100 rounded my-2 py-1 px-3 text-gray-500"
							/>
						</label>
					</div>
					<div className="flex justify-between gap-10 flex-wrap mt-8">
						<label htmlFor="email" className="flex flex-col grow">
							Email
							<input
								type="text"
								id="email"
								name="email"
								value="divyanshu.sing2022@vitstudent.ac.in"
								className="bg-gray-100 rounded my-2 py-1 px-3 text-gray-500"
							/>
						</label>
						<label htmlFor="address" className="flex flex-col grow">
							Address
							<input
								type="text"
								id="address"
								name="address"
								value="VIT Vellore"
								className="bg-gray-100 rounded my-2 py-1 px-3 text-gray-500"
							/>
						</label>
					</div>
					<div className="flex justify-between gap-10 flex-wrap mt-8">
						<label htmlFor="email" className="flex flex-col grow">
							Password Changes
							<input
								type="text"
								id="email"
								name="email"
								value="Current Password"
								className="bg-gray-100 rounded my-2 py-1 px-3 text-gray-500"
							/>
							<input
								type="text"
								id="email"
								name="email"
								value="New Password"
								className="bg-gray-100 rounded my-2 py-1 px-3 text-gray-500"
							/>
							<input
								type="text"
								id="email"
								name="email"
								value="Confirm New Password"
								className="bg-gray-100 rounded my-2 py-1 px-3 text-gray-500"
							/>
						</label>
					</div>
					<div className="flex justify-end mt-5 mb-10">
						<div className="py-2 px-8 rounded">Cancel</div>
						<div className="bg-red-500 text-white py-2 px-8 rounded text-center">
							Save Changes
						</div>
					</div>
				</section>
			</section>
		</main>
	);
}
