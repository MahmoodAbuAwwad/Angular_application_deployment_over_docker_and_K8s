# Frontend_Kubernetes

To Build Docker image

CD to Directory

Docker build . -t image_custom_name --no-cache


to Run Container


docker run -d --net=host --name nameConatiner -e "API_URL=192.168.204.226"  IMAGE_NAME
