# Frontend_Kubernetes

To Build Docker image

CD to Directory

Docker build . -t image_custom_name --no-cache


ENV vars specified both inside ang-config-maps.txt and ( ang-dep && ang-ser )

kubectl create -f ang-config-map.yaml 
kubectl create -f ang-dep.yaml 
kubectl apply -f ang-serv.yaml 

