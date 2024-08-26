FROM gradle as builder
WORKDIR /app
COPY . .
RUN ./gradlew bootJar

FROM openjdk:21
WORKDIR /app
EXPOSE 8080
COPY --from=builder /app/build/libs/*.jar app.jar
CMD ["java", "-jar", "app.jar"]