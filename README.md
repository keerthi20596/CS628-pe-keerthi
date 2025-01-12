# Resume Web Application

## Overview  
The Resume Web Application is designed to create and display a professional resume using React. The app follows the Input–Process–Output (IPO) model, a widely-used framework 
in systems analysis and software engineering. This model breaks the system into three distinct stages: Input, Process, and Output.  
By following the IPO model, this application ensures a seamless user experience for generating visually appealing resumes.

## Discussion  
The Resume Web Application works as follows:  
1. Input: The user provides information such as name, contact details, education, skills, work experience, and projects.  
2. Process: The React framework processes the input data to generate a structured and visually appealing resume layout. Styling is applied using custom CSS to ensure the design matches the user’s preferences.  
3. Output: The application displays a fully formatted resume that can be reviewed in a browser.  

## IPO Model Implementation  

### Input
- The user provides the following information:
  - Personal Information: Name, address, phone number, and email.  
  - Education: Degree, university name, graduation date, and GPA.  
  - Skills: Programming languages, frameworks, tools, operating systems, and version control systems.  
  - Work Experience: Job title, company name, dates, and key responsibilities.  
  - Projects: Project name, description, and source code links.

### Process
- The application processes the input data in the following way:
  - Dynamically renders the information using React components.  
  - Applies consistent styling (e.g., background color, spacing, alignment) using `Resume.css`.  
  - Ensures all content is properly centered for a polished appearance.

### Output
- The output is a fully formatted resume that:
  - Displays the user’s information in a clean and professional design.  
  - Matches the specified layout and style, with appropriate background color, fonts, and section alignment.  
  - Can be previewed in a web browser.

## Features
- Dynamic Input Processing: User data is dynamically injected into the resume template.  
- Customizable Design: Modify the styling in `Resume.css` to match your preferences.  
- Reusable Components: React components are designed for reusability and scalability.  
- Responsive Layout: The design adjusts to different screen sizes.  

## Pseudocode  
Below is a simplified explanation of the app's workflow using pseudocode:  

 Function RenderResumeApp
     Input: User provides personal details, education, skills, experience, and projects.
     Process: 
         - Dynamically generate resume sections using React components.
         - Apply consistent CSS styles for design and layout.
     Output: Render a professional resume on the browser.


## How to Run
### Prerequisites
- Create GitHub Account
- Install Ollama

### Steps to Run
1. Create Codespace
   cd myResume

2. Install dependencies:  
   npm install

3. Start the development server:  
   npm start

4. Open your browser and navigate to:  

   http://localhost:3000

## Example Output  
When the app runs, it displays a professional resume like the one shown below:  

            Keerthi Turakapalli
  123 Main Street, Washington USA, 12345 | (123) 456-7890 | keerthiturakapalli@cityu.com  

          Education: 
            - Master of Science in Computer Science
          University of XYZ | May 2023  
             - Bachelor of Science in Computer Science
          University of ABC | May 2021  

          Skills: Java, Python, JavaScript, etc.  
          Work Experience: Software Development Intern at XYZ Corporation.  
          Projects: Online Bookstore, Personal Website.  

##Flow Chart

![image](https://github.com/user-attachments/assets/79356e40-8d48-4ced-a9c8-61422aeaa1d3)

