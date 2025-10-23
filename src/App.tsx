import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"

function App() {
	return (
		<div class="bg-gray-700 color-white w-screen h-screen flex flex-col" style={{
			"background-image": "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://api.dujin.org/bing/1920.php)"
		}}>
			<div class="flex-1 flex items-start justify-center pt-[20vh]">
				<div class="space-y-4">
					<Header />
					<hr class="m-25px w-64 color-white" />
					<Navigation />
				</div>
			</div>
			<Footer startYear={2019} name="Yamrc" beian={{
				url: "https://icp.gov.moe/?keyword=20240013",
				text: "萌ICP备20240013号"
			}} />
		</div>

	)
}

export default App
