<template>
  <div>
      <vue-p5 @sketch="sketch"></vue-p5>
  </div>
</template>

<script>
import VueP5 from "vue-p5";
export default {
  name: "p5-example",
  components: {
    "vue-p5": VueP5
  },
  data: () => ({
    red: 255,
    green: 0,
    blue: 0,
    lines: [],
    backgroundImage: null
  }),
  methods: {
    sketch(sketch) {
      sketch.draw = () => {
        this.blue = (this.blue + 3) % 255;
        const { red, green, blue } = this;
        sketch.background(red, green, blue);
      };
    },
    preload(sketch) {
      this.backgroundImage = sketch.loadImage("../../assets/logo.png");
    },
    setup(sketch) {
      sketch.createCanvas(400, 400);
    },
    draw(sketch) {
      const { width, height } = sketch;
      sketch.image(this.backgroundImage, 0, 0, 0.5 * width, 0.5 * height);
      for (let line of this.lines) {
        sketch.stroke(line.color);
        sketch.line(line.pmouseX, line.pmouseY, line.mouseX, line.mouseY);
      }
    },
    keyPressed({ keyCode }) {
      // 'g' key
      if (keyCode === 71) {
        this.toggleGreen();
      }
    },
    mouseMoved({ mouseX, mouseY, pmouseX, pmouseY }) {
      this.pushLine({ mouseX, mouseY, pmouseX, pmouseY, color: 0 });
    },
    mouseDragged({ mouseX, mouseY, pmouseX, pmouseY }) {
      this.pushLine({ mouseX, mouseY, pmouseX, pmouseY, color: 255 });
    },
    toggleRed() {
      this.red = 255 - this.red;
    },
    toggleGreen() {
      this.green = 255 - this.green;
    },
    pushLine(line) {
      let lines = this.lines;
      lines.push(line);
      this.lines = lines.slice(-100);
    }
  }
};
</script>
<style lang="scss">
//  @import './node_modules/bootstrap/scss/bootstrap.scss';
 
</style>
