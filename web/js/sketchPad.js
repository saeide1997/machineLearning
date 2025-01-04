class SketchPad{
    constructor(container, size= 400){
        this.canvas = document.createElement('canvas')
        this.canvas.width= size
        this.canvas.height= size
        this.canvas.style= `
        background-color: white;
        box-shadow: 0px 0px 10px 2px blue
        `;
        container.appendChild(this.canvas)

        this.ctx = this.canvas.getContext('2d');

        this.path = []
        this.isDrawing = false

        this.#addEventListeners();
    }

    #addEventListeners(){
        this.canvas.onmousedown=(evt)=>{

            const mouse = this.#getMouse(evt)
            this.path=[mouse]
            this.isDrawing = true
        }
        this.canvas.onmousemove=(evt)=>{
            if(this.isDrawing){
            const mouse = this.#getMouse(evt)
            this.path.push(mouse)
            this.#redraw()
            }
        }
        this.canvas.onmouseup=(evt)=>{
            this.isDrawing = false
        }
    }

    #getMouse=(evt)=>{
        const rect = this.canvas.getBoundingClientRect()
            return [
                Math.round(evt.clientX-rect.left),
                Math.round(evt.clientY-rect.top)
            ]
    }

    #redraw(){
        // 0,0 top left of the corner and going all the way with this.canvas.width, this.canvas.height
        this.ctx.clearRect(0, 0, 
            this.canvas.width, this.canvas.height
        )
        draw.path(this.ctx, this.path) // draw is the utility function than introduce in draw.js
    }
}