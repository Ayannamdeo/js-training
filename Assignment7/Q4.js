// Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

class Promislimiter{
    constructor(limit){
        this.limit = limit;
        this.queue = [];
        this.running = 0;
        this.taskId = 1;
    }

    async enqueue(task){
        const taskId = this.taskId++;
        return new Promise((resolve, reject) =>{
            const executeTask = async () => {
                this.running++;
                try{
                   const result =  await task(taskId);
                   resolve(result);
                } 
                catch (error) {
                    reject(error);
                }
                finally{
                    this.running--;
                    this.dequeue();
                }
            }
 
 
            if (this.running < this.limit){
                executeTask();
            } else {
                this.queue.push(executeTask);
            }
        })
    }
  
    dequeue(){
        if(this.queue.length > 0 && this.running === 0 ){
            for (let i = 0; i< this.limit; i++){
                const newTask = this.queue.shift();
                if (newTask){
                    newTask();
                }
            }
        }
    }
 }

 const limiter = new Promislimiter(3);

 const asynctask = async (id) => {
    console.log(`task ${id} has started`);
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    console.log(`task ${id} completed`);
 }
 
 limiter.enqueue(asynctask);
 limiter.enqueue(asynctask);
 limiter.enqueue(asynctask);
 
 limiter.enqueue(asynctask);
 limiter.enqueue(asynctask);
 limiter.enqueue(asynctask);
 
 limiter.enqueue(asynctask);
 limiter.enqueue(asynctask);
 