//// 12 factor app -

Codebase: Maintain a single codebase for your application in version control. This ensures that all developers work with the same code and changes are tracked effectively.

Dependencies: Explicitly declare and isolate dependencies. This means specifying all the libraries and tools your application relies on and ensuring they are installed and managed consistently.

Config: Store configuration in environment variables. This allows you to separate configuration from code, making it easier to manage different configurations for development, testing, and production environments.

Backing Services: Treat backing services (databases, queues, caches, etc.) as attached resources. This means your application should be able to connect to these services via a URL or other configuration, allowing for easy swapping or scaling of services.

Build, Release, Run: Keep the build, release, and run stages strictly separate.

Processes: how an application operates within its execution environment. They are composed of one or more independent, stateless components that do not share data. Therefore, any necessary data should be stored in a stateful backing service rather than within the processes themselves.

Port Binding: Export services via port binding. Your application should be self-contained and able to run without relying on a specific web server or environment.

Concurrency: Scale out (horizontal scaling) via the process model. Instead of scaling up (vertical scaling) by adding more resources to a single instance, scale out by running multiple instances of your application in parallel.

Disposability: Maximize robustness with fast startup and graceful shutdown. Your application should be able to start up quickly and shut down cleanly to minimize downtime and errors.

Dev/Prod Parity: Keep development, staging, and production environments as similar as possible. Twelve-Factor App Methodology suggests that an app’s development, staging, and production environment should be as similar as possible to ensure that anyone can understand and release it.

Logs: Treat logs as event streams. don’t manage them within the application.

Admin Processes: Run admin/management tasks as one-off processes. This ensures that administrative tasks are run in the same environment as the regular application, making them easier to manage and troubleshoot.

//// Atomic design -

- Atomic Design is a design methodology inspired by chemistry's atomic structure.
- It categorizes UI components into five levels: atoms, molecules, organisms, templates, and pages.

- Atoms are the basic building blocks, such as buttons or input fields.
- Molecules are combinations of atoms that form distinct units, like a search bar composed of a text input and a button.
- Organisms are complex UI components made up of molecules, representing larger sections of the interface like headers or sidebars.
- Templates define the layout structure, providing a framework for organizing organisms.
- Pages are specific instances of templates, representing complete user interfaces.
