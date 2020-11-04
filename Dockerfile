FROM centos:centos7
RUN yum install -y git

FROM node:latest as build
RUN git clone https://6b9c241e78c2eab34b7f60a9896651abe1a8cf59@github.com/MahmoodAbuAwwad/frontend_kubernetes.git
RUN mkdir /app
COPY kubernetes/package*.json /app/
WORKDIR /app
RUN npm install
COPY kubernetes/. /app
RUN ls
RUN npm run build  --prod


FROM nginx:latest
COPY --from=build /app/dist/.  /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

