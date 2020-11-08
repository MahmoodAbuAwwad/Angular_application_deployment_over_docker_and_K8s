# Frontend_Kubernetes

To Build Docker image

CD to Directory
Docker build . -t image_custom_name


to Run Container

docker run -d -name Container_name -p 80:80 image_custom_name
