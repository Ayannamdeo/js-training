// Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class TaskQueue{
    constructor(limit){
        this.limit = limit;
        this.queue = [];
        this.running = 0;
    }

    enqueue(task){
        return new Promise((resolve, reject) => {
            const execute = async () => {
                try {
                    console.log(`${task.name} has started`)
                    const result = await task();
                    resolve(result);
                } catch (error){
                    reject(error);
                } finally{
                    this.running--;
                    this.dequeue();
                }
            }
            this.queue.push(execute);
            this.dequeue();
        })
    }

    dequeue(){
        if (this.queue.length > 0 && this.running < this.limit){
            const newTask = this.queue.shift();
            if (newTask){
                newTask();
                this.running++;
            }
        }
    }
 }
 
 const taskQueue = new TaskQueue(2);
 
 const task1 = () => new Promise(resolve => setTimeout(() => resolve('Task 1 completed'), 2000));
 const task2 = () => new Promise(resolve => setTimeout(() => resolve('Task 2 completed'), 4000));
 const task3 = () => new Promise(resolve => setTimeout(() => resolve('Task 3 completed'), 3000));
 const task4 = () => new Promise(resolve => setTimeout(() => resolve('Task 4 completed'), 6000));
 const task5 = () => new Promise(resolve => setTimeout(() => resolve('Task 5 completed'), 1000));
 
 taskQueue.enqueue(task1).then(console.log).catch(console.error);
 taskQueue.enqueue(task2).then(console.log).catch(console.error);
 taskQueue.enqueue(task3).then(console.log).catch(console.error);
 taskQueue.enqueue(task4).then(console.log).catch(console.error);
 taskQueue.enqueue(task5).then(console.log).catch(console.error);