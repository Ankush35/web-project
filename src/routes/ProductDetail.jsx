import Image1 from "../assets/product-detail/image1.png";
import Image2 from "../assets/product-detail/image2.png";
import Image3 from "../assets/product-detail/image3.png";
import Image4 from "../assets/product-detail/image4.png";
import Main from "../assets/product-detail/main.png";
import DeliveryIcon from "../assets/product-detail/icon-delivery.png";
import ReturnIcon from "../assets/product-detail/Icon-return.png";
import Product2 from "../assets/wishlist/product2.png";
import Product6 from "../assets/wishlist/product6.png";
import Product7 from "../assets/wishlist/product7.png";
import Product8 from "../assets/wishlist/product8.png";
import EyeIcon from "../assets/wishlist/eyeIcon.png";
import CartIcon from "../assets/wishlist/cartIcon.png";

export default function ProductDetail() {
	return (
		<main className="my-16 px-10 lg:px-32">
			<div className="flex justify-between my-16">
				<div>
					<span className="text-slate-400">Home / Gaming / </span>
					<span>Havoc HV G-92 Gamepad</span>
				</div>
			</div>
			<section className="flex  justify-between items-center flex-col lg:flex-row gap-10">
				<div className="hidden md:flex flex-col gap-5 md:flex-row lg:flex-col md:order-2 lg:order-1">
					<img
						src={Image1}
						alt="Detail 1"
						className="bg-gray-200 p-3 rounded-md"
					/>
					<img
						src={Image2}
						alt="Detail 2"
						className="bg-gray-200 p-3 rounded-md"
					/>
					<img
						src={Image3}
						alt="Detail 3"
						className="bg-gray-200 p-3 rounded-md"
					/>
					<img
						src={Image4}
						alt="Detail 4"
						className="bg-gray-200 p-3 rounded-md"
					/>
				</div>
				<div className="md:order-1 lg:order-2">
					<img
						src={Main}
						alt="Product"
						className="bg-gray-200 p-3 rounded-md h-full w-full"
					/>
				</div>
				<div className="flex flex-col gap-2 md:w-full lg:w-96 md:order-3 lg:order-3 grow">
					<div className="text-2xl font-semibold">
						Havoc HV G-92 Gamepad
					</div>
					<div className="text-sm">
						<span className="text-gray-500">150 Reviews | </span>
						<span className="text-green-500">In Stock</span>
					</div>
					<div className="text-2xl">$192.00</div>
					<div className="text-sm font-light mt-3">
						PlayStation 5 Controller Skin High quality vinyl with
						air channel adhesive for easy bubble free install & mess
						free removal Pressure sensitive.
					</div>
					<div className="border h-1 w-full border-gray-200 rounded-md bg-gray-200 my-3"></div>
					<div className="flex items-center">
						<div className="mr-5">Colors: </div>
						<div className="rounded-full bg-[#A0BCE0] w-4 h-4 border-2 border-black mr-2"></div>
						<div className="rounded-full bg-pink-500 w-4 h-4"></div>
					</div>
					<div className="flex items-center gap-3 my-3">
						<div>Size: </div>
						<div className="flex gap-3">
							<SizeButton size="XS" />
							<SizeButton size="S" />
							<SizeButton size="M" bg="red-500" />
							<SizeButton size="L" />
							<SizeButton size="XL" />
						</div>
					</div>
					<div className="flex my-3 gap-5">
						<div className="flex divide-x-2 divide-gray-400 border-2 border-gray-400 rounded">
							<div className="py-1 px-5 text-xl">-</div>
							<div className="py-1 px-8 text-xl">2</div>
							<div className="py-1 px-5 bg-red-500 text-xl">
								+
							</div>
						</div>
						<div className="bg-red-500 px-5 py-1 rounded text-center">
							Buy Now
						</div>
						<div className="border py-2 px-4 border-gray-400 rounded text-red-500">
							&#9829;
						</div>
					</div>
					<div className="border-2 border-gray-400 rounded divide-y-2 divide-gray-400 flex flex-col">
						<div className="py-2 px-5 flex gap-5">
							<img src={DeliveryIcon} alt="Delivery Icon" />
							<div>
								<div className="font-semibold">
									Free Delivery
								</div>
								<div className="text-sm underline">
									Enter your postal code for Delivery
									Availability
								</div>
							</div>
						</div>
						<div className="py-2 px-5 flex gap-5">
							<img src={ReturnIcon} alt="Return Icon" />
							<div>
								<div className="font-semibold">
									Return Delivery
								</div>
								<div className="text-sm">
									Free 30 Days Delivery Returns. Details
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="my-32">
				<div className="flex justify-between items-center">
					<div className="flex gap-5 justify-center items-center">
						<div className="w-5 h-10 bg-red-500 rounded-md"></div>
						<div>Related Items</div>
					</div>
					<div className="border-2 border-gray-400 px-3 lg:px-10 py-2 rounded-md">
						See All
					</div>
				</div>
				<div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
					<ProductCard
						imgSrc={Product7}
						name="HAVIT HV-G92 Gamepad"
						discountPrice="$120"
						originalPrice="$160"
					/>
					<ProductCard
						imgSrc={Product8}
						name="AK-900 Wired Keyboard"
						discountPrice="$960"
						originalPrice="$1160"
					/>
					<ProductCard
						imgSrc={Product6}
						name="IPS LCD Gaming Monitor"
						discountPrice="$370"
						originalPrice="$400"
					/>
					<ProductCard
						imgSrc={Product2}
						name="RGB liquid CPU Cooler"
						discountPrice="$160"
						originalPrice="$170"
					/>
				</div>
			</section>
		</main>
	);

	function SizeButton({ size, bg = "white" }) {
		return (
			<div
				className={`border border-gray-300 rounded-md aspect-square w-8 px-2 py-1 text-center bg-${bg}`}
			>
				{size}
			</div>
		);
	}

	function ProductCard({ imgSrc, name, discountPrice, originalPrice = "" }) {
		return (
			<div className="relative flex flex-col w-60 my-16">
				<img
					alt="Eye Icon"
					src={EyeIcon}
					className="absolute top-1 right-1 bg-white rounded-full p-1 hover:cursor-pointer"
				/>
				<div className="w-full h-36 bg-gray-200 rounded-md rounded-b-none p-5">
					<img alt="Product" src={imgSrc} className="w-full h-full" />
				</div>
				<div className="bg-black text-white text-xs flex gap-2 items-center justify-center rounded-md rounded-t-none py-2 hover:cursor-pointer">
					<img alt="Cart Icon" src={CartIcon} />{" "}
					<span>Add to Cart</span>
				</div>
				<div className="mt-5">{name}</div>
				<div className="flex justify-start gap-3">
					<span className="text-red-500">{discountPrice}</span>
					<span className="line-through text-gray-400">
						{originalPrice}
					</span>
				</div>
			</div>
		);
	}
}
