# ipython-experiment

- Is it possible to run a jupyter kernel locally and have a web client connect to it?

```bash
# run the web server
cd web
npm run dev

# start the jupyter kernel
jupyter notebook
```

## References
- https://jupyter-kernel-gateway.readthedocs.io/en/latest/index.html
- https://jupyter-client.readthedocs.io/en/latest/messaging.html#execute
- https://ipython.readthedocs.io/en/stable/development/execution.html#running-user-code
- https://stackoverflow.com/questions/9977446/connecting-to-a-remote-ipython-instance
- https://stackoverflow.com/questions/42233102/how-to-create-an-insecure-jupyter-server
- How to use `makeSettings`
  - https://github.com/jupyterlab/jupyterlab/blob/master/packages/services/src/basemanager.ts#L44
- Example with Node.js
  - https://github.com/jupyterlab/jupyterlab/blob/master/packages/services/examples/browser/src/kernel.ts
- Execute code
  - [API Documentation](https://jupyterlab.github.io/jupyterlab/modules/_services_src_index_._services_src_kernel_kernel_.ikernelconnection.html#requestexecute)
