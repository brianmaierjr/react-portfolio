import Section from "../components/section";
import Layout from "../components/layout";
import { ArrowUpRight } from "react-feather";

const Colophon = () => {
	return (
		<Layout>
			<Section label='Colophon'>
				<h2>Colophon</h2>
				<p>
					This site was built as an experiment to dive more into{" "}
					<a
						className='externalLink'
						href='https://react.dev/'
						target='_blankl'>
						React.js
						<ArrowUpRight />
					</a>{" "}
					by way of{" "}
					<a
						className='externalLink'
						href='https://vite.dev/'
						target='_blankl'>
						Vite
						<ArrowUpRight />
					</a>
					. Fonts used are{" "}
					<a
						className='externalLink'
						href='https://systemfontstack.com/'
						target='_blank'>
						system fonts
						<ArrowUpRight />
					</a>{" "}
					and was heavily inspired by many sites on{" "}
					<a
						className='externalLink'
						href='https://deadsimplesites.com/'
						target='_blankl'>
						Dead Simple Sites
						<ArrowUpRight />
					</a>
					. Tooltips are provided by{" "}
					<a
						className='externalLink'
						href='https://atomiks.github.io/tippyjs/'
						target='_blank'>
						Tippy.js
						<ArrowUpRight />
					</a>
					. State management is handled by{" "}
					<a
						className='externalLink'
						href='https://zustand-demo.pmnd.rs/'
						target='_blank'>
						Zustand
						<ArrowUpRight />
					</a>{" "}
					and it is hosted on{" "}
					<a
						className='externalLink'
						href='https://www.netlify.com/'
						target='_blank'>
						Netlify
						<ArrowUpRight />
					</a>
					.
				</p>
			</Section>
		</Layout>
	);
};

export default Colophon;
