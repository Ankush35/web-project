import SideImage from "../assets/about/sideImage.png";
import Service1 from "../assets/about/services1.png";
import Service2 from "../assets/about/services2.png";
import Service3 from "../assets/about/services3.png";
import Service4 from "../assets/about/services4.png";
import Service5 from "../assets/about/services5.png";
import Service6 from "../assets/about/services6.png";
import Person1 from "../assets/about/person1.png";
import Person2 from "../assets/about/person2.png";
import Person3 from "../assets/about/person3.png";

export default function About() {
	return (
		<main>
			<div className="px-10 lg:px-32 my-16">
				<span className="text-slate-400">Home / </span>
				<span>About</span>
			</div>
			<section className="relative flex flex-col md:flex-row my-10">
				<div className="flex flex-col justify-center px-10 lg:px-32 md:w-1/2">
					<h1 className="text-3xl font-medium tracking-widest my-10">
						Our Story
					</h1>
					<p className="text-sm font-light my-3">
						Launched in 2015, Exclusive is South Asia’s premier
						online shopping marketplace with an active presence in
						Bangladesh. Supported by wide range of tailored
						marketing, data and service solutions, Exclusive has
						10,500 sellers and 300 brands and serves 3 millions
						customers across the region.
					</p>
					<p className="text-sm font-light my-3">
						Exclusive has more than 1 Million products to offer,
						growing at a very fast. Exclusive offers a diverse
						assortment in categories ranging from consumer.
					</p>
				</div>
				<div className="md:w-4/12 md:h-96 md:absolute md:right-0">
					<img
						alt="About"
						src={SideImage}
						className="w-full h-full"
					/>
				</div>
			</section>
			<section className="flex flex-col md:flex-row gap-10 justify-between items-center px-10 lg:px-32 mt-32">
				<DetailCard
					imgSrc={Service1}
					number="10.5k"
					text="Sellers on our site"
				/>
				<DetailCard
					imgSrc={Service2}
					number="33k"
					text="Monthly product sale"
				/>
				<DetailCard
					imgSrc={Service3}
					number="45.5k"
					text="Customers active on our site"
				/>
				<DetailCard
					imgSrc={Service2}
					number="25k"
					text="Annual sale on our site"
				/>
			</section>
			<section className="flex flex-col md:flex-row gap-10 justify-between items-center px-10 lg:px-32 mt-32">
				<PersonCard
					imgSrc={Person1}
					name="Tom Cruise"
					designation="Founder & Chairman"
				/>
				<PersonCard
					imgSrc={Person2}
					name="Emma Watson"
					designation="Managing Director"
				/>
				<PersonCard
					imgSrc={Person3}
					name="Will Smith"
					designation="Product Designer"
				/>
			</section>
			<section className="flex flex-col md:flex-row gap-10 justify-between items-center px-10 lg:px-60 my-32 w-full">
				<ServiceCard
					imgSrc={Service4}
					text1="FREE AND FAST DELIVERY"
					text2="Free delivery for all orders over $140"
				/>
				<ServiceCard
					imgSrc={Service5}
					text1="24/7 CUSTOMER SERVICE"
					text2="Friendly 24/7 customer support"
				/>
				<ServiceCard
					imgSrc={Service6}
					text1="MONEY BACK GUARANTEE"
					text2="We return money within 30 days"
				/>
			</section>
		</main>
	);

	function DetailCard({ imgSrc, number, text }) {
		return (
			<div className="flex flex-col gap-5 items-center border-2 border-gray-300 p-5 w-56 rounded-md hover:border-black">
				<img alt="Services" src={imgSrc} />
				<div className="font-bold text-xl">{number}</div>
				<div className="text-sm text-center">{text}</div>
			</div>
		);
	}

	function PersonCard({ imgSrc, name, designation }) {
		return (
			<div className="flex flex-col">
				<div className="bg-gray-200 px-5 pt-5 w-72 h-80 lg:w-64 lg:h-80 md:w-44 md:h-60 rounded-md">
					<img alt="Person" src={imgSrc} className="w-full h-full" />
				</div>
				<div className="tracking-widest font-semibold text-xl mt-5">
					{name}
				</div>
				<div className="text-sm">{designation}</div>
			</div>
		);
	}

	function ServiceCard({ imgSrc, text1, text2 }) {
		return (
			<div className="flex flex-col gap-5 items-center justify-center w-56 rounded-md">
				<img alt="Services" src={imgSrc} />
				<div className="font-bold text-lg text-center">{text1}</div>
				<div className="text-sm text-center">{text2}</div>
			</div>
		);
	}
}
