import Product1 from "../assets/wishlist/product1.png";
import Product2 from "../assets/wishlist/product2.png";
import Product3 from "../assets/wishlist/product3.png";
import Product4 from "../assets/wishlist/product4.png";
import Product5 from "../assets/wishlist/product5.png";
import Product6 from "../assets/wishlist/product6.png";
import Product7 from "../assets/wishlist/product7.png";
import Product8 from "../assets/wishlist/product8.png";
import EyeIcon from "../assets/wishlist/eyeIcon.png";
import CartIcon from "../assets/wishlist/cartIcon.png";

export default function Wishlist() {
	return (
		<main className="my-16">
			<div className="px-10 lg:px-32 my-16">
				<span className="text-slate-400">Home / </span>
				<span>Wishlist</span>
			</div>
			<section className="px-10 lg:px-32">
				<div className="flex justify-between items-center">
					<div className="">Wishlist (4)</div>
					<div className="border-2 border-gray-400 px-3 lg:px-10 py-2 rounded-md">
						Move All to Bag
					</div>
				</div>
				<div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
					<ProductCard
						imgSrc={Product1}
						name="Gucci duffle bag"
						discountPrice="$960"
						originalPrice="$1160"
					/>
					<ProductCard
						imgSrc={Product2}
						name="RGB liquid CPU Cooler"
						discountPrice="$1960"
					/>
					<ProductCard
						imgSrc={Product3}
						name="GP11 Shooter USB Gamepad"
						discountPrice="$550"
					/>
					<ProductCard
						imgSrc={Product4}
						name="Quilted Satin Jacket"
						discountPrice="$750"
					/>
				</div>
			</section>
			<section className="my-16 px-10 lg:px-32">
				<div className="flex justify-between items-center">
					<div className="flex gap-5 justify-center items-center">
						<div className="w-5 h-10 bg-red-500 rounded-md"></div>
						<div>Just For You</div>
					</div>
					<div className="border-2 border-gray-400 px-3 lg:px-10 py-2 rounded-md">
						See All
					</div>
				</div>
				<div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
					<ProductCard
						imgSrc={Product5}
						name="ASUS FHD Gaming Laptop"
						discountPrice="$960"
						originalPrice="$1160"
					/>
					<ProductCard
						imgSrc={Product6}
						name="IPS LCD Gaming Monitor"
						discountPrice="$1160"
					/>
					<ProductCard
						imgSrc={Product7}
						name="HAVIT HV-G92 Gamepad"
						discountPrice="$560"
						originalPrice="$1160"
					/>
					<ProductCard
						imgSrc={Product8}
						name="AK-900 Wired Keyboard"
						discountPrice="$200"
					/>
				</div>
			</section>
		</main>
	);

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
