import EventEmitter from "events";

const emitter = new EventEmitter();
emitter.on("myEvent", (data) => {
    console.log("Event has happened!");
    console.log("ID: ", data.id);
    console.log("NAME: ", data.name);
});
emitter.emit("myEvent", { id: 54456, name: "Max" });