# MULTI-CLOUD-ARCHITECTURE

**COMPANY**:CODTECH IT SOLUTIONS

**NAME**: POOJA.U

**INTERN ID**:CT04DG1131

**DOMAIN**: CLOUD COMPUTING

**DURATION**: 4 WEEKS

**MENTOR**: NEELA SANTOSH

# DESCRIPTION

This project demonstrates the design, development, and deployment of a simple multi-cloud architecture, where the frontend and backend services are hosted on Amazon Web Services (AWS) and Render, respectively. The application seamlessly integrates these services to function as a cohesive system, showcasing real-world cross-platform cloud communication.

 **Objective:** The primary goal of this project is to design a multi-cloud architecture where the frontend and backend services are hosted independently on two different cloud providers and can communicate securely and reliably. The approach demonstrates the benefits of platform diversity and fault tolerance by avoiding a single point of failure.

 **Cloud Providers Used:** AWS S3 (Amazon Simple Storage Service): Used to host the frontend static website. S3 provides scalable, secure, and low-latency object storage, perfect for serving static web content.

**Render:** A modern cloud platform used to deploy the Node.js backend server (built using Express.js). Render offers automated deployments, HTTPS, and scalability out-of-the-box, making it ideal for hosting lightweight APIs and web services.

**Architecture Overview:** 
**Frontend (AWS S3):**
A simple HTML/CSS/JavaScript webpage hosted as a static website on AWS S3.
The website presents a user interface with a button that allows users to trigger a request to the backend.

**Backend (Render):**
A Node.js Express server deployed on Render that exposes a REST API endpoint (/api).
On receiving a GET request, it returns a JSON response with a greeting message: "Hello from Render backend (server.js)".

**Cross-Cloud Communication:** When the user clicks the "Call Backend" button on the frontend (served from AWS), the JavaScript fetch() function makes a live API call to the Render-hosted backend endpoint.The response is displayed dynamically on the webpage, demonstrating that both services are integrated successfully despite residing on different cloud platforms.

**Security and CORS Handling:**
To ensure cross-origin communication between AWS (frontend) and Render (backend), CORS (Cross-Origin Resource Sharing) headers are properly configured in the Express backend using the cors middleware. This ensures that browsers allow requests from the AWS-hosted site to the Render-hosted API.
**Key Features:**
Cloud-Agnostic Design: The system doesn't rely on cloud-specific SDKs or services, making it flexible and portable across different providers.
Scalability: Both services can scale independently based on demand.
Fault Isolation: If one provider experiences downtime, only a portion of the service is affected, enhancing overall resilience.
Simplified Deployment: Minimal setup with npm, Express.js, and S3 static hosting makes it ideal for rapid prototyping and proof-of-concept implementations.

 **Benefits of the Multi-Cloud Approach:**
Reduced Vendor Lock-In: Services can be migrated or extended across providers easily.

**Improved Reliability and Availability:** Even if one provider has an outage, the other components remain operational.

**Cost Optimization:** Developers can select services based on price-performance advantages offered by different providers.

**Conclusion:**
This project effectively demonstrates a practical use case of multi-cloud architecture using two popular platforms—AWS and Render. It highlights how services hosted on separate cloud environments can interact seamlessly, enabling developers and organizations to harness the strengths of multiple providers. This architecture forms a foundational blueprint for building more complex, distributed, and resilient applications in the cloud era.
  
# OUTPUT

![Image](https://github.com/user-attachments/assets/0e4bb12b-bf47-423e-8b6e-87525c1d5c2d)

![Image](https://github.com/user-attachments/assets/e3a0027b-07a2-40bc-b731-2a199104edec)

![Image](https://github.com/user-attachments/assets/97cef892-192a-47a0-a301-d43ee9b58134)

![Image](https://github.com/user-attachments/assets/a13cc110-4b73-47a5-bc10-5c0e1def1890)

![Image](https://github.com/user-attachments/assets/6303969e-9b6f-4615-8baa-ad4e84c84bd5)

![Image](https://github.com/user-attachments/assets/a271b18b-26a8-4fea-a372-25466ea3b065)

![Image](https://github.com/user-attachments/assets/99002afb-ebde-46a3-830e-c3e2ee4c9339)

![Image](https://github.com/user-attachments/assets/47cea4e4-b243-42b3-8ed5-97a8a0f6ff64)
