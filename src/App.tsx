import { createSignal, onMount } from 'solid-js'
import avatar from '@/assets/avatar.png'
import buttonLinks from './assets/ButtonLinks.json'
import socialLinks from './assets/SocialLinks.json'
import SnowCanvas from './components/SnowCanvas'


// 懒，反正也不复杂，先放一起吧
function App() {
	const date = new Date()
	const [hitokoto, setHitokoto] = createSignal('')
	const [from, setFrom] = createSignal('')

	const refreshHitokoto = async () => {
		setHitokoto('一言正在赶来的路上')
		setFrom('来源加载中')

		try {
			const response = await fetch('https://v1.hitokoto.cn')
			const data = await response.json()
			setHitokoto(data.hitokoto)
			setFrom(data.from)
		} catch (error) {
			setHitokoto("获取一言出现错误，详细信息请查看控制台。")
			setFrom("来源获取失败")
			console.error("[error] Failed to get hitokoto: ", error)
		}
	}

	onMount(() => {
		refreshHitokoto()
	})

	return (
		<div class="w-screen h-screen bg-gray-700 text-white relative overflow-hidden" style={{
			"background-image": "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://api.dujin.org/bing/1920.php)"
		}}>
			<SnowCanvas />

			<main class="absolute w-50% h-auto top-50% left-50% transform -translate-x-1/2 -translate-y-1/2">
				<header class="flex flex-col items-center justify-center text-center">
					<img
						src={avatar}
						alt="Avatar"
						class="w-[clamp(128px,30dvw,200px)] h-[clamp(128px,30dvw,200px)] rounded-full object-cover mx-auto overflow-hidden 
							shadow-[5px_5px_5px_10px_rgba(255,255,255,0),0px_2px_20px_3px_rgba(0,0,0,0.25)] transition-all-1000 hover:rotate-360"
					/>
					<h1 class="text-[clamp(2.25rem,2.5dvw+1rem,3rem)] text-white transition-all-1000">Yamrc</h1>
					<p class="text-[clamp(0.75em,1dvw+0.5em,1.25em)] text-white transition-all-1000">unsafe fn life()</p>

					<hr class="w-50% mx-auto my-20px border-t border-white/50 transition-all-1000 max-w-1100px:w-55% max-w-960px:w-full" />

					<div
						class="text-center text-white transition-all-500 cursor-pointer max-w-600px mx-auto block"
						onClick={refreshHitokoto}
					>
						<p>
							{hitokoto()}<br />
							-「<strong>{from()}</strong>」
						</p>
					</div>

					<nav class="mt-20px">
						<ul class="flex justify-center flex-wrap">
							{buttonLinks.map((item: any) => (
								<li class="list-none m-5px">
									<button
										title={item.title}
										onClick={() => window.open(item.url, '_blank')}
										class="w-65px h-30px border-none rounded-5px bg-black/30 text-white flex justify-center items-center
											p-3px cursor-pointer transition-all-300 hover:bg-black/50"
									>
										<i class={item.icon} />
										<span class="ml-5px">{item.title}</span>
									</button>
								</li>
							))}
						</ul>
					</nav>

					<nav class="mt-10px">
						<ul class="flex justify-center flex-wrap">
							{socialLinks.map((item: any) => (
								<li class="list-none">
									<a
										href={item.url}
										title={item.title}
										target="_blank"
										class="border-0 px-6px py-6px pl-9px"
									>
										<i class={`${item.icon} font-normal not-italic text-18px text-white/90 transition-all-300 hover:-translate-y-2px
											hover:text-white`} />
										<span class="hidden">{item.label}</span>
									</a>
								</li>
							))}
						</ul>
					</nav>
				</header>
			</main>

			<footer class="flex justify-center text-14px fixed bottom-0 w-full h-35px">
				Copyright &copy; 2019 - {date.getFullYear()} Yamrc&nbsp;&&nbsp;
				<a
					href="https://icp.gov.moe/?keyword=20240013"
					target="_blank"
					class="text-white no-underline cursor-pointer"
				>
					萌ICP备20240013号
				</a>
			</footer>
		</div>
	)
}

export default App
