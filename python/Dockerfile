FROM python:2.7.11
MAINTAINER Mike Hockerman <mike@hockerman.com>
USER root

# Copy our source code in 
WORKDIR /app
COPY app.py .
COPY requirements.txt .

# Set up python workspace
RUN [ "easy_install", "pip" ]
RUN [ "pip", "install", "-r", "requirements.txt" ]

# Run the app!
ENV FLASK_APP app.py
EXPOSE 5000
CMD [ "flask", "run", "--host", "0.0.0.0", "-p", "5000" ]