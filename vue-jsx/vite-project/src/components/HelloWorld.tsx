import { defineComponent, defineEmits, ref, Ref, PropType } from "vue";

interface Props {
  msg: string
}
const Hello = defineComponent({
  props: {
    msg: {
      type: String as PropType<Props['msg']>
    }
  },
  emits: ['update:modelValue', 'add'],
  setup (props, { emit }) {
    console.log('props', props)
    return () => (
      <div>
        {/* <p>{props.msg}</p> */}
        <button onClick={() => emit('add')}>+</button>
        {/* <br /> */}
        {/* <p>{props.arr}</p> */}
      </div>
    )
  }
});

const World = defineComponent({
  setup () {
    const title: Ref<number> = ref(666)
    const msg: Ref<string> = ref('cc')
    const arr: Ref<number> = ref(1)

    function add () {
      title.value++
    }
    return {
      title,
      arr,
      msg,
      add
    };
  },
  render () {
    return (
      <div>
        <Hello msg={this.msg} onAdd={this.add}></Hello>
        <p>{this.title}</p>
        <br />
        <p>{this.arr}</p>
      </div >
    );
  },
});

export default World