import avatar from '@/assets/avatar.png'

function Header() {
  return (
    <header class="flex flex-col items-center">
        <img 
          src={avatar} 
          alt="Avatar" 
          class="w-[30vw] h-[30vw] max-w-[200px] max-h-[200px] min-w-[100px] min-h-[100px] rounded-full object-cover mr-4"
        />
        <h1 class="text-size-2.5rem font-bold">Yamrc</h1>
        <p class="text-xl">unsafe fn life()</p>
    </header>
  )
}

export default Header