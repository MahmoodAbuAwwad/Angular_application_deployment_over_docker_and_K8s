# Frontend_Kubernetes

To Build Docker image

CD to Directory
Docker build . -t image_custom_name --no-cache


to Run Container
docker run -d --name Container name --env API_URL="Custom IP" my-container
