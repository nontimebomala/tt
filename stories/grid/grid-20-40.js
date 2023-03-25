import Vue from 'vue'

const style = {
    position: 'relative',
    backgroundColor: '#808080',
    background: 'linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)',
    backgroundSize: '20px 40px, 20px 40px'
}

export default () => ({
  template: `
    <div :style='${JSON.stringify(style)}'>
      <vue-draggable-resizable :grid="[20,40]" :x="0" :y="0">
        <p>Grid 20x40 starting from the top-left corner</p>
      </vue-draggable-resizable>
    </div>
  `
})