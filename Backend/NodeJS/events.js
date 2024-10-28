// EVENT DRIVEN PROGRAMMING

// create an event Emitter object
const eventEmitter = require('events')
// create an instance of the eventEmitter
const customEmitter = new eventEmitter()

// response is the event name that node will always listen to
customEmitter.on('response',(name,id)=>{
    console.log(`Hi ${name}, your form is submitted with the reference id ${id}`)
})

// emitting the event
customEmitter.emit('response','Fathima',22)