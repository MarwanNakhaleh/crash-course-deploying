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

To test and make sure our image actually works, we can simply run 

- `docker run -td -p 5000:5000 myapp`

# Hosting Our Docker Image

The next step is to get our docker image up on a server somewhere. 
The location where we host our image isn't necessarily the same place as we are going to deploy it, though many services offer both.
We are just going to use basic DockerHub hosting, which means it will be public. 
If you need private images, there are lots of options: AWS ECR, Google, DockerHub has paid plans, lots of stuff.

- `docker login`
- `docker tag myapp:latest mikehock/testpythonapp:latest`
- `docker push mikehock/testpythonapp:latest`

Done-zo.

# Let's Get This To The Cloud!

With a docker image already made, it is capable of being hosted on many different services and sites. 
To keep things simple, we are going to deploy to a service called Hyper (https://hyper.sh), which is basically just Heroku but for docker containers. 
Interestingly, you can deploy docker containers to heroku, so really Heroku is Heroku for docker containers. 
But this introduces some variety.

At this point, I'm going to assume you already have a hyper account set up. 
That's a pretty strong assumption.

- `hyper config`
- `hyper run -d -p 5000:5000 --name testpythonapp mikehock/testpythonapp`

At this point, we have a container running in Hyper. 
But, we can't access it because it hasn't been given an external IP address.

- `hyper fip allocate 1` (note: running this command will immediately cost $1!)
- This will return an IP address
- `hyper fip attach $THAT_IP testpythonapp`

# Let's Scale This

The best part about docker is that the image provides a template for copies of your app. 
Hyper provides "Services" which allow you to specify how many copies of an app you want, then Hyper handles load balancing between them. 
This is super similar to specifying how many copies of your app you want on Heroku. 

- `hyper service create --container-port=5000 --service-port=80 --name=py --replicas=3 --label=app=py mikehock/testpythonapp`
- `--container-port` is the port we expose on each container; in this case, `5000`
- `--service-port` is the port exposed to the world. Most apps would just want `80`.
- `--name` is the name of your service 
- `--label` is a list of key-vale pairs for metadata about the service. Its not that important.
- `--replicas` specifies how many copies you want to load balance between 
- Final argument is the image name

With that running, lets attach a public ip address so we can access it.

- `hyper service attach-fip --fip $AN_ALLOCATED_FIP py`

Now, you can visit port 80 of that IP address and see the app!

