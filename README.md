Gatekeeper:
The Gatekeeper is a relatively new project that was created to greatly enhance and facilitate integration between OPA and Kubernetes.


Install Gatekeeper: 
kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/master/deploy/gatekeeper.yaml


Constraint: 
Constraint is an object that says on which resources are the policies applicable, and also what parameters are to be queried and checked to see if they are available in the resource manifest the user is trying to apply in your Kubernetes cluster.

Here we have added constraintTemplate with named - "getekeeper.yaml" by that we are adding required labels for restriction of deployment for PODs if any accurate label not mentioned.


To manage this organized way: 

1. Create namespace for your deployment.
2. Use them in your deployment menifest.
3. Apply gatekeeper menifest with adding label of deployment.
