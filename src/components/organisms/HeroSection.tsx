import { IoMailOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import Button from "../atoms/Button";

function HeroSection() {
	return (
		<section className="py-[10vh] max-w-3xl mx-auto p-6">
			<div>
				<h2 className="font-semibold">Jessy Justice Julien Baki</h2>
				<p className="text-neutral-500">Software Engineer</p>
			</div>

			<br />

			<div>
				<p className="text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa
					illo et consequatur aspernatur distinctio placeat in nam ab, cum
					explicabo totam, deserunt similique saepe molestiae. Non sequi
					necessitatibus maiores!
				</p>
				<br />
				<p className="text-justify">
					Magni quasi dignissimos suscipit accusamus cupiditate dolor voluptas
					rerum et placeat cumque, voluptatum minus distinctio iusto, non
					assumenda reprehenderit dolore voluptates id consequuntur unde
					eligendi consectetur nulla. Quaerat, labore sequi. Excepturi dicta
					saepe natus fugiat ipsam quaerat corporis, nobis libero ducimus
					officia nesciunt non architecto illum nostrum accusantium.
				</p>

				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 mt-8 mb-5">
					<div className="flex items-center gap-3">
						<Button>
							<a
								className="flex border px-3 py-2 rounded-md border-gray-700 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-250"
								href="mailto:bakijessy@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IoMailOutline size="0.8rem" />
								Contact Me
							</a>
						</Button>

						<Button>
							<a
								className="flex border px-3 py-2 rounded-md border-gray-700 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-250"
								href=""
								target="_blank"
								rel="noopener noreferrer"
							>
								<FiDownload size="0.8rem" />
								Resume
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
