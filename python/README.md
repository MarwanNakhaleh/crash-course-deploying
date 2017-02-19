# Docker

1. Install [Docker](https://docs.docker.com/engine/installation/)

# Kubernetes 

1. Install [Kubectl](https://kubernetes.io/docs/user-guide/prereqs/) to work with our k8s cluster.
2. Get a kubeconfig for our k8s cluster from Mike :)

# Python

For initial setup and testing locally...

- `cd python && virtualenv venv`
- `source ./venv/bin/activate`
- `pip install -r requirements.txt`
- `FLASK_APP=app.py flask run`
- Visit `localhost:5000` :)

# Now, To Dockerize

Check out the `Dockerfile` shipped with this repository.

- `docker build . -t myapp`

That's it! If you run `docker images` you should see a bunch of output, but at the top should be our `myapp` image.

# Run It Locally 

To test and make sure our container worked locally, we can simply run 

- `docker run -td -p 5000:5000 myapp`

# Let's Get This To The Cloud!