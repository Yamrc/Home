import { onMount, onCleanup } from 'solid-js'

class Snowflake {
    canvas: HTMLCanvasElement
    x: number
    y: number
    size: number
    yspeed: number
    xspeed: number

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.x = Math.random() * this.canvas.width
        this.y = Math.random() * this.canvas.height
        this.size = Math.random() * 0.5 + 5
        this.yspeed = Math.random() * 1 + 0.5
        this.xspeed = Math.random() * 0.5 - 0.25
    }

    update() {
        this.y += this.yspeed
        this.x += this.xspeed
        if (this.y >= this.canvas.height + 5 || this.x > this.canvas.width + 5 || this.x < -5) {
            this.x = Math.random() * this.canvas.width
            this.y = 0
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        ctx.fillStyle = '#fff'
        ctx.fill()
    }
}

function SnowCanvas() {
    let canvas: HTMLCanvasElement | undefined
    let ctx: CanvasRenderingContext2D | undefined
    let snowflakes: Snowflake[] = []
    let animationId: number | undefined

    const numberOfSnow = window.innerWidth > 768 ? 125 : 50

    const initSnow = () => {
        if (!canvas) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const handleResize = () => {
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        for (let i = 0; i < numberOfSnow; i++) {
            snowflakes.push(new Snowflake(canvas))
        }

        animate()
    }

    const animate = () => {
        if (!ctx || !canvas) return

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        snowflakes.forEach((snowflake) => {
            snowflake.update()
            snowflake.draw(ctx!)
        })
        animationId = requestAnimationFrame(animate)
    }

    onMount(() => {
        if (canvas) {
            ctx = canvas.getContext('2d')!
            initSnow()
        }
    })

    onCleanup(() => {
        if (animationId) cancelAnimationFrame(animationId)
    })

    return (
        <canvas ref={canvas} class="fixed top-0 left-0 pointer-events-none bg-transparent z-1" />
    )
}

export default SnowCanvas
