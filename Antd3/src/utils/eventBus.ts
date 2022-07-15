import mitt from "mitt"
const EventBus = mitt()
export default EventBus

// EventBus.emit("dosomething", { name: 'cc', age: 19 })
// EventBus.on("dosomething", (data) => {})